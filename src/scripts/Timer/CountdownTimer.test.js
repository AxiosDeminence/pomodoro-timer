// @ts-check

import { ACCEPTABLE_DRIFT, SECOND } from '../Constants.mjs';
import { AccurateInterval } from './AccurateInterval.mjs';
import { CountdownTimer } from './CountdownTimer.mjs';

jest.mock('./AccurateInterval.mjs');

/** @typedef {import('./CountdownTimer.mjs').TimerFunctionCallback} TimerFunctionCallback */

describe('Unit tests', () => {
    beforeEach(() => {
        /** @type {jest.Mock<AccurateInterval>} */
        (AccurateInterval).mockClear();
    });

    /**
     * Gets a countdown timer with default initialization
     *
     * @param {object} [obj={}] Settings object
     * @param {boolean} [obj.zeroTick=true] Whether to execute the callback at the start
     * @param {number} [obj.interval=10] Milliseconds between each tick of the countdown
     * @param {number} [obj.acceptableDrift=10] Amount of acceptable drift between each tick
     * @param {TimerFunctionCallback} [obj.cb=jest.fn((remainingTime => { return; }))]
     *     Callback to be run every tick
     * @returns {CountdownTimer} CountdownTimer used for a test
     */
    function getCountdownTimer({
        zeroTick = true,
        interval = 10,
        acceptableDrift = 10,
        cb = jest.fn(() => { }),
    } = {}) {
        return new CountdownTimer(zeroTick, interval, acceptableDrift, cb);
    }

    it('Uses AccurateInterval', () => {
        getCountdownTimer();
        expect(AccurateInterval).toHaveBeenCalledTimes(1);
    });

    it('Set remaining time on start', () => {
        const timer = getCountdownTimer();
        timer.start(120);
        expect(timer.remainingTime).toEqual(120);
        timer.stop();
    });

    it('Restart timer with new time', () => {
        const timer = getCountdownTimer();
        timer.start(120);
        expect(timer.remainingTime).toEqual(120);
        timer.start(160);
        expect(timer.remainingTime).toEqual(160);
        timer.stop();
    });

    it('Remove remaining time on stop', () => {
        const timer = getCountdownTimer();
        timer.start(120);
        expect(timer.remainingTime).not.toBeUndefined();
        timer.stop();
        expect(timer.remainingTime).toBeUndefined();
    });

    describe('Timer callback functionality', () => {
        /** @type {string} */
        let timerString;

        // TODO: Ideally use done() but cannot find a way to use it with an assertion function
        const cb = jest.fn(
            /**
             * @param {string} remainingTime Remaining time formatted in HH:MM format
             */
            (remainingTime) => { timerString = remainingTime; }
        );

        const timer = getCountdownTimer({ zeroTick: true, cb });

        afterEach(() => {
            timer.stop();
        });

        it('Calls callback function', () => {
            timer.start(1);
            expect(cb).toHaveBeenCalledTimes(1);
        });

        /**
         * @param {number} remainingTime Amount of time to start the CountdownTimer for
         * @param {string} expectedString String the timer should respond with
         */
        function checkTimerFunction(remainingTime, expectedString) {
            timer.start(remainingTime);
            expect(timerString).toEqual(expectedString);
        }

        it('Single-digit seconds only', () => {
            checkTimerFunction(1, '0:01');
        });

        it('Double-digit seconds only', () => {
            checkTimerFunction(11, '0:11');
        });

        it('Single-digit minutes and seconds', () => {
            checkTimerFunction(1 * 60 + 1, '1:01');
        });

        it('Single-digit minutes, double-digit seconds', () => {
            checkTimerFunction(1 * 60 + 11, '1:11');
        });

        it('Double-digit minutes, single-digit seconds', () => {
            checkTimerFunction(11 * 60 + 1, '11:01');
        });

        it('Double-digit minutes and seconds', () => {
            checkTimerFunction(11 * 60 + 11, '11:11');
        });

        it('Triple-digit minutes and double-digit seconds', () => {
            checkTimerFunction(111 * 60 + 11, '111:11');
        });
    });
});

describe('Integration with AccurateInterval', () => {
    it('CountdownTimer terminates when time runs out', () => {
        const timer = new CountdownTimer(true, SECOND, ACCEPTABLE_DRIFT, () => {});
        const countdownStopSpy = jest.spyOn(timer, 'stop');
        const intervalControllerStopSpy = jest.spyOn(timer.intervalController, 'stop');

        timer.start(1);
        expect(countdownStopSpy).not.toHaveBeenCalled();

        timer.timerFunction();
        expect(countdownStopSpy).toHaveBeenCalled();
        expect(intervalControllerStopSpy).toHaveBeenCalled();
    });
});
