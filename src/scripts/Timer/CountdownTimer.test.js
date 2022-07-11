// @ts-check

import AccurateInterval from './AccurateInterval.mjs';
import CountdownTimer from './CountdownTimer.mjs';

// Pattern adopted from https://stackoverflow.com/a/52366601
jest.mock('./AccurateInterval.mjs');

/**
 * Gets a countdown timer with default initialization
 * @param {object} [obj={}]
 * @param {boolean} [obj.zeroTick=true]
 * @param {number} [obj.interval=10]
 * @param {number} [obj.acceptableDrift=10]
 */
function getCountdownTimer({ zeroTick = true, interval = 10, acceptableDrift = 10 } = {}) {
    return new CountdownTimer(zeroTick, interval, acceptableDrift);
}

beforeEach(() => {
    /** @type {jest.Mock<AccurateInterval>} */
    (AccurateInterval).mockClear();
});

it('Uses AccurateInterval', () => {
    getCountdownTimer();
    expect(AccurateInterval).toHaveBeenCalledTimes(1);
});

it('Set remaining time on start', () => {
    const timer = getCountdownTimer();
    timer.start(120);
    expect(timer.remainingTime).toBe(120);
    timer.stop();
});

it('Restart timer with new time', () => {
    const timer = getCountdownTimer();
    timer.start(120);
    expect(timer.remainingTime).toBe(120);
    timer.start(160);
    expect(timer.remainingTime).toBe(160);
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
    const timer = getCountdownTimer({zeroTick: true});

    afterEach(() => {
        timer.stop();
    });

    /**
     * 
     * @param {number} remainingTime 
     * @param {*} expectedString 
     */
    function checkTimerFunction(remainingTime, expectedString) {
        timer.start(remainingTime);
        expect(timer.timerFunction()).toBe(expectedString);
    }

    // eslint-disable jest/expect-expect
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
    // eslint-enable jest/expect-expect
});
