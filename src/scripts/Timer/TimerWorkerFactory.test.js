/**
 * @jest-environment ../../../__tests__/environments/workers.mjs
 */

// @ts-check

import { TimerWorkerFactory } from './TimerWorkerFactory.mjs';

describe('Workers allowed', () => {
    /** @type {Worker} */
    let timer;

    const factory = new TimerWorkerFactory();

    it('Creates proper timer', () => {
        timer = factory.getTimer(() => {});
        expect(timer).toBeInstanceOf(Worker);
        timer.terminate();
    });

    it('Returns a function for the start command', () => {
        expect(typeof factory.getStartCommand(timer)).toEqual('function');
    });

    it('Returns a function for the stop command', () => {
        expect(typeof factory.getStopCommand(timer)).toEqual('function');
    });

    it('Integration testing', (done) => {
        expect.assertions(1);
        /** @type {Function} */
        let stopCmd;

        /** @type {import('./TimerFactory.mjs').TimerFunctionCallback} */
        const cb = (timerString) => {
            try {
                expect(timerString).toEqual('1:59');
                stopCmd();
                done();
            } catch (error) {
                stopCmd();
                done(error);
            }
        };

        timer = factory.getTimer(cb);
        const startCmd = factory.getStartCommand(timer);
        stopCmd = factory.getStopCommand(timer);
        startCmd(60 + 59);
    });
});
