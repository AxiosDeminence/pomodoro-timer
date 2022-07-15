// @ts-check

/**
 * @file Abstract factory for countdown timers by implementing the
 *     [TimerFactory Interface]{@link module:TimerFactory}
 * @author Juhmer Tena <juhmertena@gmail.com>
 * @module CountdownTimerFactory
 */

import { CountdownTimer } from './CountdownTimer.mjs';
import { SECOND, ACCEPTABLE_DRIFT } from '../Constants.mjs';

/** @typedef {import('./TimerFactory.mjs').TimerFactory<CountdownTimer>} TimerFactory */

/** @typedef {import('./TimerFactory.mjs').TimerFunctionCallback} TimerFunctionCallback */

/** @typedef {import('./TimerFactory.mjs').TimerStartCommand} TimerStartCommand */

/** @typedef {import('./TimerFactory.mjs').TimerStopCommand} TimerStopCommand */

/**
 * @implements {TimerFactory}
 */
export class CountdownTimerFactory {
    /**
     * @param {TimerFunctionCallback} callback Callback to be run when the timer changes
     * @returns {CountdownTimer} A CountdownTimer that will use the callback every second
     */
    getTimer(callback) {
        const timer = new CountdownTimer(true, SECOND, ACCEPTABLE_DRIFT, callback);

        return timer;
    }

    /**
     * Get the start command for the inline countdown timer.
     *
     * @param {CountdownTimer} timer CountdownTimer to start
     * @returns {TimerStartCommand} Function to start the CountdownTimer
     */
    getStartCommand(timer) {
        return (time) => {
            timer.start(time);
        };
    }

    /**
     * Get the stop command for the inline countdown timer.
     *
     * @param {CountdownTimer} timer CountdownTimer to stop
     * @returns {TimerStopCommand} Function to stop the CountdownTimer
     */
    getStopCommand(timer) {
        return () => {
            timer.stop();
        };
    }
}

export default CountdownTimerFactory;
