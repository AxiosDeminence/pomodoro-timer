// @ts-check

/**
 * @file 
 * @author Juhmer Tena <juhmertena@gmail.com>
 * @module CountdownTimer
 */

import AccurateInterval from './AccurateInterval.mjs';

/**
 * @callback timerFunctionCallback
 * @param {string} remainingTimeStr The remaining time formatted in MM:SS
 */

/**
 * Countdown timer. timerFunction should be decorated to bind it to an element.
 * Should be decorated with the only override 
 */
export default class CountdownTimer {
    /**
     * @param {boolean} runAtStart Have the first callback run happen when the
     *     timer gets started
     * @param {number} interval Milliseconds between each callback run
     * @param {number} acceptableDrift Allowed drift in milliseconds
     * @param {!timerFunctionCallback} cb 
     */
    constructor(runAtStart, interval, acceptableDrift, cb) {
        /** 
         * Whether to immediately run the timerFunction on start
         * @type {boolean}
         */
        this.zeroTickEnabled = runAtStart;

        /**
         * @readonly
         * @private
         * @type {AccurateInterval}
         */
        this.intervalController = new AccurateInterval(this.timerFunction, null,
            interval, acceptableDrift);
        
        /**
         * Remaining time in seconds
         * @type {number | undefined}
         */
        this.remainingTime = undefined;

        this.cb = cb;
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
        this.intervalController.start();
        this.remainingTime = totalTime;

        if (this.zeroTickEnabled) {
            this.cb(this.timerString);
        }
    }

    /**
     * Stops the countdown timer
     */
    stop() {
        this.remainingTime = undefined;
        this.intervalController.stop();
    }

    /**
     * @private
     * @return {string}
     */
    get timerString() {
        if (typeof this.remainingTime === 'undefined') {
            throw new Error('Remaining time is not defined for countdown timer');
        }

        const remainingMinutes = Math.floor(this.remainingTime / 60);
        const remainingSeconds = this.remainingTime % 60;

        const timerString = `${remainingMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return timerString;
    }

    /**
     * Callback function to be run at every interval.
     * @protected
     */
    timerFunction() {
        if (typeof this.remainingTime === 'undefined') {
            throw new Error('timerFunction called when timer is not running');
        }

        this.remainingTime -= 1;

        this.cb(this.timerString);
    }
}
