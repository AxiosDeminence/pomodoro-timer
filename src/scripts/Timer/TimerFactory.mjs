// @ts-check

// If we use webworkers, these modules are preloaded.
// Otherwise, we use them for this file.
import { ACCEPTABLE_DRIFT, SECOND, TIMER_WORKER_URL } from '../Constants.mjs';
import CountdownTimer from './CountdownTimer.mjs';

// We add some weird typechecking for interfaces for polymorphism.

/** @typedef {import('./CountdownTimer.mjs').timerFunctionCallback} timerFunctionCallback */

/**
 * Start command for timers
 * @callback TimerStartCommand
 * @param {!number} time Minutes the timer should run for
 */

/**
 * Stop command for timers
 * @callback TimerStopCommand
 */

/**
 * @interface
 * @template {object} Timer
 */
export class TimerFactory {
    constructor() {}

    /**
     * @param {timerFunctionCallback} callback Callback to be run at every decrement
     * @return {Timer}
     */
    getTimer(callback) { throw new Error('Not implemented') }

    /**
     * 
     * @param {Timer} timer
     * @return {function}
     */
    getStartCommand(timer) { throw new Error('Not implemented'); }

    /**
     * 
     * @param {Timer} timer
     * @return {function}
     */
    getStopCommand(timer) { throw new Error('Not implemented'); }
}

/**
 * @implements {TimerFactory<Worker>}
 */
export class TimerWorkerFactory {
    constructor() {}

    /**
     * Gets a worker-based timer.
     * @param {timerFunctionCallback} callback Callback to be run at every decrement
     * @returns {Worker}
     */
    getTimer(callback) {
        const worker = new Worker(TIMER_WORKER_URL, { type: 'module' });
        worker.addEventListener('message', (event) => {
            const timerString = event.data;
            callback(timerString);
        });

        return worker;
    }

    /**
     * Get the start command for the timer-based web worker.
     * @param {Worker} timer 
     * @returns {TimerStartCommand}
     */
    getStartCommand(timer) {
        return (time) => {
            timer.postMessage(time.toString());
        };
    }

    /**
     * Get the stop command for the timer-based web worker.
     * @param {Worker} timer Web worker to stop
     * @returns {TimerStopCommand}
     */
    getStopCommand(timer) {
        return () => {
            timer.postMessage('stop');
        }
    }
}

/**
 * @implements {TimerFactory<CountdownTimer>}
 */
export class CountdownTimerFactory {
    constructor() { }

    /**
     * @param {timerFunctionCallback} callback Callback to be run when the timer changes
     * @returns {CountdownTimer}
     */
    getTimer(callback) {
        const timer = new CountdownTimer(true, SECOND, ACCEPTABLE_DRIFT, callback);

        return timer;
    }

    /**
     * Get the start command for the inline countdown timer.
     * @param {CountdownTimer} timer 
     * @returns {TimerStartCommand}
     */
    getStartCommand(timer) {
        return (time) => {
            timer.start(time);
        };
    }

    /**
     * Get the stop command for the inline countdown timer.
     * @param {CountdownTimer} timer
     * @returns {TimerStopCommand}
     */
    getStopCommand(timer) {
        return () => {
            timer.stop();
        }
    }
}

/**
 * @return {TimerFactory<object>}
 */
export default function getTimerFactory() {
    if (typeof Worker !== 'undefined') {
        return new TimerWorkerFactory();
    } else {
        return new CountdownTimerFactory();
    }
}