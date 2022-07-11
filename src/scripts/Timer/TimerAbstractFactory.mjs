// @ts-check

// If we use webworkers, these modules are preloaded.
// Otherwise, we use them for this file.
import { ACCEPTABLE_DRIFT, SECOND, TIMER_WORKER_URL } from '../Constants.mjs';
import CountdownTimer from './CountdownTimer.mjs';

// We add some weird typechecking for interfaces for polymorphism.

/**
 * Start command for timers
 * @callback TimerStartCommand
 * @param {number} time Minutes the timer should run for
 */

/**
 * Stop command for timers
 * @callback TimerStopCommand
 */

/**
 * @interface
 * @template T
 */
export class TimerAbstractFactory {
    constructor() {}

    /**
     * @return {T}
     */
    getTimer() { throw new Error('Not implemented') }

    /**
     * 
     * @param {T} timer
     * @return {function}
     */
    getStartCommand(timer) { throw new Error('Not implemented'); }

    /**
     * 
     * @param {T} timer
     * @return {function}
     */
    getStopCommand(timer) { throw new Error('Not implemented'); }
}

/**
 * @implements {TimerAbstractFactory<Worker>}
 */
export class TimerWorkerAbstractFactory {
    constructor() {}

    /**
     * Gets a worker-based timer.
     * @returns {Worker}
     */
    getTimer() {
        /** @type {Worker} */
        const worker = new Worker(TIMER_WORKER_URL, {type: 'module'});

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
 * @implements {TimerAbstractFactory<CountdownTimer>}
 */
export class CountdownTimerAbstractFactory {
    constructor() { }

    /**
     * @returns {CountdownTimer}
     */
    getTimer() {
        /** @type {CountdownTimer} */
        const timer = new CountdownTimer(true, SECOND, ACCEPTABLE_DRIFT);

        return timer;
    }

    /**
     * Get the start command for the inline countdown timer.
     * @param {CountdownTimer} timer 
     * @returns {TimerStartCommand}
     */
    getStartCommand(timer) {
        return (time) => {
            timer.stop();
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
 * @return {TimerAbstractFactory<unknown>}
 */
export default function getTimerFactory() {
    if (typeof Worker !== 'undefined') {
        return new TimerWorkerAbstractFactory();
    } else {
        return new CountdownTimerAbstractFactory();
    }
}