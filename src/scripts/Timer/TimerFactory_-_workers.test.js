/**
 * @jest-environment ../../../__tests__/environments/workers.mjs
 */

// @ts-check

import getTimerFactory, { TimerWorkerFactory } from './TimerFactory.mjs';

/** @typedef {import('./TimerFactory.mjs').TimerFactory<object>} TimerFactory */

describe('Workers allowed', () => {
    /**
     * @type {TimerFactory}
     */
    let factory;

    /** @type {Worker} */
    let timer;

    afterAll(() => {
        timer.terminate();
    });

    it('Factory creation', () => {
        factory = getTimerFactory();
        expect(factory).toBeInstanceOf(TimerWorkerFactory);
    });

    it('Creates proper timer', () => {
        timer = /** @type {TimerWorkerFactory} */ (factory).getTimer(() => {});
        expect(timer).toBeInstanceOf(Worker);
    });

    it('Returns a function for the start command', () => {
        expect(typeof factory.getStartCommand(timer)).toBe('function');
    });

    it('Returns a function for the stop command', () => {
        expect(typeof factory.getStopCommand(timer)).toBe('function');
    });
});
