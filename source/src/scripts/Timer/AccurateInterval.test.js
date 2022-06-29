// @ts-check

import AccurateInterval, { AccurateIntervalError } from './AccurateInterval.mjs';

const mockedCallback = jest.fn(() => {});

/**
*
* @param {object} [obj={}]
* @param {function} [obj.cb=mockedCallback]
* @param {number} [obj.interval=10]
* @param {number} [obj.acceptableDrift=10]
* @returns {{spy: jest.SpyInstance, intervalController: AccurateInterval}}
*/
function getIntervalController({ cb = mockedCallback, interval = 10, acceptableDrift = 10 } = {}) {
    const intervalController = new AccurateInterval(cb, null, interval, acceptableDrift);
    const spy = jest.spyOn(intervalController, 'tick');
    return { spy, intervalController };
}

beforeAll(() => {
    jest.useFakeTimers();
});

describe('Proper construction required', () => {
    it('Generic construction possible', () => {
        getIntervalController();
    });

    it('Callback must be a function', () => {
        expect(getIntervalController.bind(null, { cb: 1 }))
            .toThrowError(TypeError);
    });

    describe('Interval value', () => {
        it('Not coerable to Number', () => {
            expect(getIntervalController.bind(null, { interval: 'happy' }))
                .toThrowError(RangeError);
        });

        it('Below acceptable range', () => {
            expect(getIntervalController.bind(null, { interval: 0 }))
                .toThrowError(RangeError);
        });

        it('Unsafe value', () => {
            expect(getIntervalController.bind(null, { interval: Infinity }))
                .toThrowError(RangeError);
        });

        it('Coercable to Number, safe, and within range', () => {
            expect(getIntervalController.bind(null, { interval: BigInt(24) }))
                .not.toThrowError(RangeError);
        });
    });

    describe('Acceptable drift value', () => {
        it('Not coerable to Number', () => {
            expect(getIntervalController.bind(null, { acceptableDrift: 'happy' }))
                .toThrowError(RangeError);
        });

        it('Below acceptable range', () => {
            expect(getIntervalController.bind(null, { acceptableDrift: -1 }))
                .toThrowError(RangeError);
        });

        it('Unsafe value', () => {
            expect(getIntervalController.bind(null, { acceptableDrift: Infinity }))
                .toThrowError(RangeError);
        });

        it('Coercable to Number, safe, and within range', () => {
            expect(getIntervalController.bind(null, { acceptableDrift: BigInt(24) }))
                .not.toThrowError(RangeError);
        });
    });
});

describe('AccurateInterval starting and stopping behavior', () => {
    it('Starts and stops with proper calls', () => {
        const { intervalController } = getIntervalController();
        intervalController.start();
        intervalController.stop();
    });

    describe('Prevent improper starts and stops', () => {
        const { intervalController } = getIntervalController();

        it('Prevent starting twice', () => {
            intervalController.start();
            expect(intervalController.start.bind(intervalController))
                .toThrowError(AccurateIntervalError);
            intervalController.stop();
        });

        it('Prevent stopping when not yet started', () => {
            expect(intervalController.stop.bind(intervalController))
                .toThrowError(AccurateIntervalError);
        });
    });

    describe('Does not tick on start', () => {
        const { spy, intervalController } = getIntervalController();

        afterEach(() => {
            intervalController.stop();
            spy.mockClear();
        });

        it('if configured', () => {
            intervalController.start(false);
            expect(spy).not.toHaveBeenCalled();
        });

        it('if not configured', () => {
            intervalController.start();
            expect(spy).not.toHaveBeenCalled();
        });
    });

    it('Tick on start if configured', () => {
        const { spy, intervalController } = getIntervalController();

        intervalController.start(true);
        expect(spy).toHaveBeenCalled();
        intervalController.stop();
    });
});

describe('AccurateInterval ticking behavior', () => {
    const interval = 100;
    const acceptableDrift = 10;
    const phase = interval * 60;

    it('Without drift', () => {
        const { spy, intervalController } = getIntervalController({ interval, acceptableDrift });
        intervalController.start();
        jest.advanceTimersByTime(phase);
        expect(spy).toHaveBeenCalledTimes(phase / interval);
        intervalController.stop();
    });

    describe('With drift', () => {
        // Because of jest's fake timers, we'll need to create a pausable controller
        // to accurately simulate drift
        class PausableController extends AccurateInterval {
            pause() {
                clearTimeout(this.timer);
            }
        }

        const intervalController = new PausableController(mockedCallback,
            null, interval, acceptableDrift);
        const spy = jest.spyOn(intervalController, 'tick');

        beforeEach(() => {
            intervalController.start();
        });

        afterEach(() => {
            intervalController.stop();
            spy.mockClear();
        });

        it('Single drift and catch-up', () => {
            // Right before the tick, pause the controller
            jest.advanceTimersByTime(phase - 1);
            let runningCount = phase / interval - 1;

            expect(spy).toHaveBeenCalledTimes(runningCount);
            intervalController.pause();

            // After continuing, the tick should not have still occurred
            jest.advanceTimersByTime(1);
            expect(spy).toHaveBeenCalledTimes(runningCount);

            // Go past the acceptable drift and have the tick occur
            jest.advanceTimersByTime(acceptableDrift + 1);
            runningCount += 1;

            intervalController.tick();
            expect(spy).toHaveBeenCalledTimes(runningCount);

            // Right when the next tick should have occurred
            jest.advanceTimersByTime(interval - acceptableDrift - 1);
            runningCount += 1;

            expect(spy).toHaveBeenCalledTimes(runningCount);

            // Next interval runs normally
            jest.advanceTimersByTime(interval);
            runningCount += 1;

            expect(spy).toBeCalledTimes(runningCount);
        });

        it('Predictive drift', () => {
            // Set up while running
            jest.advanceTimersByTime(phase);
            let runningCount = phase / interval;

            expect(spy).toHaveBeenCalledTimes(runningCount);
            intervalController.pause();

            // The next tick should predict the drift and gradually increase it
            // until it needs to reset it
            jest.advanceTimersByTime(interval + 1);
            runningCount += 1;

            intervalController.tick(true);
            expect(spy).toHaveBeenCalledTimes(runningCount);

            for (let i = 0; i <= acceptableDrift + 1; i += 1) {
                jest.advanceTimersByTime(interval - 2);
                expect(spy).toHaveBeenCalledTimes(runningCount);
                jest.advanceTimersByTime(1);
                runningCount += 1;
                expect(spy).toHaveBeenCalledTimes(runningCount);
            }

            // Forced restoration through tick
            jest.advanceTimersByTime(interval + acceptableDrift);
            expect(spy).toHaveBeenCalledTimes(runningCount);
            jest.advanceTimersByTime(1);
            runningCount += 1;
            expect(spy).toHaveBeenCalledTimes(runningCount);

            // Drift remains corrected afterwards
            for (let i = 0; i < acceptableDrift; i += 1) {
                jest.advanceTimersByTime(interval - 1);
                expect(spy).toHaveBeenCalledTimes(runningCount);
                jest.advanceTimersByTime(1);
                runningCount += 1;
                expect(spy).toHaveBeenCalledTimes(runningCount);
            }
        });
    });
});
