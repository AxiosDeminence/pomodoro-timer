// @ts-check

/**
 * @file Unit and integration testing for when workers are not supported
 * @author Juhmer Tena <juhmertena@gmail.com>
 * {@link module:TimerFactory}
 */

import { ACCEPTABLE_DRIFT, SECOND } from '../Constants.mjs';
import { CountdownTimer } from './CountdownTimer.mjs';
import { CountdownTimerFactory } from './CountdownTimerFactory.mjs';

describe('Workers not allowed', () => {
    /** @type {CountdownTimer} */
    let timer;

    /** @type {string} */
    let tickResult;

    const factory = new CountdownTimerFactory();

    /** @type {import('./TimerFactory.mjs').TimerFunctionCallback} */
    const cb = (timerString) => { tickResult = timerString; };

    it('Creates proper timer', () => {
        timer = factory.getTimer(cb);
        expect(timer).toBeInstanceOf(CountdownTimer);

        expect(typeof timer.remainingTime).toEqual('undefined');
        expect(timer.zeroTickEnabled).toEqual(true);
        expect(timer.intervalController.interval).toEqual(SECOND);
        expect(timer.intervalController.acceptableDrift).toEqual(ACCEPTABLE_DRIFT);
        expect(timer.cb).toEqual(cb);
    });

    it('Returns a function for the start command', () => {
        expect(typeof factory.getStartCommand(timer)).toEqual('function');
    });

    it('Returns a function for the stop command', () => {
        expect(typeof factory.getStopCommand(timer)).toEqual('function');
    });

    it('Integration testing', () => {
        const startCmd = factory.getStartCommand(timer);
        const startSpy = jest.spyOn(timer, 'start');

        const stopCmd = factory.getStopCommand(timer);
        const stopSpy = jest.spyOn(timer, 'stop');

        startCmd(60);
        expect(startSpy).toHaveBeenCalled();
        expect(tickResult).toEqual('1:00');

        stopCmd();
        expect(stopSpy).toHaveBeenCalled();
    });
});
