/**
 * @jest-environment ../../../__tests__/environments/workers.mjs
 */

// @ts-check

import getTimerFactory, { TimerWorkerAbstractFactory } from './TimerAbstractFactory.mjs';

/** @typedef {import('./TimerAbstractFactory.mjs').TimerAbstractFactory<unknown>} TimerAbstractFactory */

describe('Workers allowed', () => {
    /**
     * @template T
     * @type {TimerAbstractFactory}
     */
    let factory;

    /** @type {Worker} */
    let timer;

    afterAll(() => {
        timer.terminate();
    });

    it('Factory creation', () => {
        factory = /** @type {TimerAbstractFactory} */ (getTimerFactory());
        expect(factory).toBeInstanceOf(TimerWorkerAbstractFactory);
    });

    it('Creates proper timer', () => {
        timer = (/** @type {TimerWorkerAbstractFactory} */ (factory)).getTimer();
        expect(timer).toBeInstanceOf(Worker);
    });

    it('Returns a function for the start command', () => {
        expect(typeof factory.getStartCommand(timer)).toBe('function');
    });

    it('Returns a function for the stop command', () => {
        expect(typeof factory.getStopCommand(timer)).toBe('function');
    });
});
