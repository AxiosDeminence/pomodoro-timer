// @ts-check

/**
 * @file Abstract factory for web worker-based timers by implementing the
 *     [TimerFactory Interface]{@link module:TimerFactory}
 * @author Juhmer Tena <juhmertena@gmail.com>
 * @module TimerWorkerFactory
 */

import { TIMER_WORKER_URL } from '../Constants.mjs';

/** @typedef {import('./TimerFactory.mjs').TimerFactory<Worker>} TimerFactory */

/** @typedef {import('./TimerFactory.mjs').TimerFunctionCallback} TimerFunctionCallback */

/** @typedef {import('./TimerFactory.mjs').TimerStartCommand} TimerStartCommand */

/** @typedef {import('./TimerFactory.mjs').TimerStopCommand} TimerStopCommand */

/**
 * @implements {TimerFactory}
 */
export class TimerWorkerFactory {
    /**
     * Gets a worker-based timer.
     *
     * @param {TimerFunctionCallback} callback Callback to be run at every tick
     * @returns {Worker} Web worker that uses the CountdownTimer
     */
    getTimer(callback) {
        const worker = new Worker(new URL(TIMER_WORKER_URL, import.meta.url), { type: 'module' });
        worker.addEventListener('message', (event) => {
            const timerString = event.data;
            callback(timerString);
        });

        return worker;
    }

    /**
     * Get the start command for the worker-based timer
     *
     * @param {Worker} timer Web worker to start
     * @returns {TimerStartCommand} Function to start the worker-based timer
     */
    getStartCommand(timer) {
        return (time) => {
            timer.postMessage(time.toString());
        };
    }

    /**
     * Get the stop command for the timer-based web worker
     *
     * @param {Worker} timer Web worker to stop
     * @returns {TimerStopCommand} Function to stop the worker-based timer
     */
    getStopCommand(timer) {
        return () => {
            timer.postMessage('stop');
        };
    }
}

export default TimerWorkerFactory;
