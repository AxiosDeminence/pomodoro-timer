// @ts-check

import CountdownTimer from './CountdownTimer.mjs';
import getTimerFactory, { CountdownTimerAbstractFactory } from './TimerAbstractFactory.mjs';

// Technically not JSDoc but we'll just use it to allow type-safety and prevent unused imports.
/** @typedef {import('./TimerAbstractFactory.mjs').TimerAbstractFactory} TimerAbstractFactory */

jest.useFakeTimers();

describe('Workers not allowed', () => {
    /** @type {TimerAbstractFactory} */
    let factory;

    /** @type {CountdownTimer} */
    let timer;

    it('Factory creation', () => {
        factory = getTimerFactory();
        expect(factory).toBeInstanceOf(CountdownTimerAbstractFactory);
    });

    it('Creates proper timer', () => {
        timer = (/** @type {CountdownTimerAbstractFactory} */ (factory)).getTimer();
        expect(timer).toBeInstanceOf(CountdownTimer);
    });

    it('Returns a function for the start command', () => {
        expect(typeof factory.getStartCommand(timer)).toBe('function');
    });

    it('Returns a function for the stop command', () => {
        expect(typeof factory.getStopCommand(timer)).toBe('function');
    });

    it('Internal testing', () => {
        /** @type {Function} */
        const cmd = (/** @type {CountdownTimerAbstractFactory} */ (factory)).getStartCommand(timer);
        jest.advanceTimersByTime(1000);
    });
});
