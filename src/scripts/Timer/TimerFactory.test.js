// @ts-check

import CountdownTimer from './CountdownTimer.mjs';
import getTimerFactory, { CountdownTimerFactory } from './TimerFactory.mjs';

// Technically not JSDoc but we'll just use it to allow type-safety and prevent unused imports.
/** @typedef {import('./TimerFactory.mjs').TimerFactory<object>} TimerFactory */

jest.useFakeTimers();

describe('Workers not allowed', () => {
    /** @type {TimerFactory} */
    let factory;

    /** @type {CountdownTimer} */
    let timer;

    it('Factory creation', () => {
        factory = getTimerFactory();
        expect(factory).toBeInstanceOf(CountdownTimerFactory);
    });

    it('Creates proper timer', () => {
        timer = factory.getTimer();
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
        const cmd = (/** @type {CountdownTimerFactory} */ (factory)).getStartCommand(timer);
        jest.advanceTimersByTime(1000);
    });
});
