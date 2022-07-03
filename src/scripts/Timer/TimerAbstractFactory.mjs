// @ts-check

// If we use webworkers, these modules are preloaded.
// Otherwise, we use them for this file.
import { ACCEPTABLE_DRIFT, SECOND, TIMER_WORKER_URL } from '../Constants.mjs';
import CountdownTimer from './CountdownTimer.mjs';

/**
 * Start command for timers
 * @callback TimerStartCommand
 * @param {number} Minutes the timer should run for
 */

/**
 * Stop command for timers
 * @callback TimerStopCommand
 */


/**
 * 
 */
export class TimerAbstractFactory {
    constructor() {}

    getTimer() {}

    getStartCommand(timer) {}

    getStopCommand(timer) {}
}

/**
 * @implements TimerAbstractFactory
 */
export class TimerWorkerAbstractFactory extends TimerAbstractFactory {
    constructor() {
        super();
        // Workaround to enforce polymorphism. Inspired by: https://github.com/microsoft/TypeScript/issues/17498#issuecomment-399439654
        // eslint-disable-next-line no-unused-vars
        const /** @type {TimerAbstractFactory} */ instance = this;
    }

    /**
     * 
     * @returns {Worker}
     */
    getTimer() {
        /** @type {Worker} */
        return new Worker(TIMER_WORKER_URL, {type: 'module'});
    }


    /**
     * Get the start command for the timer-based web worker.
     * @param {Worker} timer 
     * @returns {TimerStartCommand}
     */
    getStartCommand(timer) {
        return (time) => {
            timer.postMessage(time);
        }
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
 * @extends TimerAbstractFactory
 */
export class CountdownTimerAbstractFactory {
    constructor() {}

    getTimer() {
        return new CountdownTimer(true, SECOND, ACCEPTABLE_DRIFT);
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
        }
    }

    /**
     * Get the stop command for the inline countdown timer.
     * @returns {TimerStopCommand}
     */
    getStopCommand(timer) {
        return () => {
            timer.stop();
        }
    }
}

export default function getTimerFactory() {
    if (typeof Worker !== 'undefined') {
        return new TimerWorkerAbstractFactory();
    } else {
        return new CountdownTimerAbstractFactory();
    }
}