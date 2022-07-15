// @ts-check

/**
 * @file Abstract factories for timer objects dependent on Worker support.
 * @author Juhmer Tena <juhmertena@gmail.com>
 * @module TimerFactory
 */

/** @typedef {import('./CountdownTimer.mjs').TimerFunctionCallback} TimerFunctionCallback */

/**
 * Start command for timers
 *
 * @callback TimerStartCommand
 * @param {!number} time Minutes the timer should run for
 */

/**
 * Stop command for timers
 *
 * @callback TimerStopCommand
 */

/* eslint-disable class-methods-use-this, no-unused-vars */
/**
 * @interface
 * @template {object} Timer
 */
export class TimerFactory {
    /**
     * @param {TimerFunctionCallback} callback Callback to be run at every tick
     * @returns {Timer} Timer to be used
     */
    getTimer(callback) { throw new Error('Not implemented'); }

    /**
     * @param {Timer} timer Timer object to be started with the returned command
     * @returns {TimerStartCommand} Function to start the timer object
     */
    getStartCommand(timer) { throw new Error('Not implemented'); }

    /**
     * @abstract
     * @param {Timer} timer Timer object to be stopped with the returned command
     * @returns {TimerStopCommand} Function to stop the timer object
     */
    getStopCommand(timer) { throw new Error('Not implemented'); }
}
/* eslint-enable class-methods-use-this, no-unused-vars */

export default TimerFactory;
