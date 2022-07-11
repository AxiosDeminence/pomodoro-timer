// @ts-check

/**
 * @file 
 * @author Juhmer Tena <juhmertena@gmail.com>
 * @module CountdownTimer
 */

import AccurateInterval from './AccurateInterval.mjs';

/**
 * Countdown timer. timerFunction should be decorated to bind it to an element.
 */
export default class CountdownTimer {
    /**
     * @param {boolean} runAtStart Have the first callback run happen when the
     *     timer gets started
     * @param {number} interval Milliseconds between each callback run
     * @param {number} acceptableDrift Allowed drift in milliseconds
     */
    constructor(runAtStart, interval, acceptableDrift) {
        /** @type {boolean} */
        this.zeroTickEnabled = runAtStart;

        /** @type {AccurateInterval} */
        this.intervalController = new AccurateInterval(this.timerFunction, null,
            interval, acceptableDrift);
        
        /**
         * Remaining time in seconds
         * @type {number | undefined}
         */
        this.remainingTime = undefined;
    }

    /**
     * Starts the countdown timer. Will restart the timer with the new time if
     *     currently running.
     * @param {number} totalTime Time in minutes that should elapse
     */
    start(totalTime) {
        if (typeof this.remainingTime !== 'undefined') {
            this.intervalController.stop();
        }
        this.intervalController.start(this.zeroTickEnabled);
        this.remainingTime = totalTime;
    }

    /**
     * Stops the countdown timer
     */
    stop() {
        this.remainingTime = undefined;
        this.intervalController.stop();
    }

    /**
     * Callback function to be run at every interval
     * @returns {string} Remaining time formatted as a MM:SS string
     */
    timerFunction() {
        if (typeof this.remainingTime === 'undefined') {
            throw new Error('timerFunction called when timer is not running');
        }

        const remainingMinutes = Math.floor(this.remainingTime / 60);
        const remainingSeconds = this.remainingTime % 60;

        const timerString = `${remainingMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        this.remainingTime -= 1;

        return timerString;
    }
}

/**
 * 
 */
export class CountdownTimerHTMLElementDecorator {
    
}