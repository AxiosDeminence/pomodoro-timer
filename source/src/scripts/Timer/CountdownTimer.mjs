// @ts-check

import AccurateInterval from './AccurateInterval.mjs';

export default class CountdownTimer {
    /**
     * Remaining time in seconds.
     * @type {number}
     */
    remainingTime;

    /** @type {AccurateInterval} */
    intervalController;

    /**
     * @param {boolean} runAtStart Have the first callback run happen when the
     *     timer gets started
     * @param {number} interval Milliseconds between each callback run
     * @param {number} acceptableDrift Allowed drift in milliseconds
     */
    constructor(runAtStart, interval, acceptableDrift) {
        this.zeroTickEnabled = runAtStart;
        this.intervalController = new AccurateInterval(this.timerFunction, null,
            interval, acceptableDrift);
    }

    /**
     * Starts the countdown timer
     * @param {number} totalTime Time in minutes that should elapse
     */
    start(totalTime) {
        if (typeof this.remainingTime !== 'undefined') {
            throw new Error('CountdownTimer already started');
        }
        this.remainingTime = totalTime;
        this.intervalController.start(this.zeroTickEnabled);
    }

    /**
     * Stops the countdown timer
     */
    stop() {
        this.intervalController.stop();
    }

    /**
     * Callback function to be run at every interval
     * @returns {string} Remaining time formatted as a MM:SS string
     */
    timerFunction() {
        const remainingMinutes = Math.floor(this.remainingTime / 60);
        const remainingSeconds = this.remainingTime % 60;

        const timerString = `${remainingMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        this.remainingTime -= 1;

        return timerString;
    }
}