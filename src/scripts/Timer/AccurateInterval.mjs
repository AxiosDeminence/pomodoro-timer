// @ts-check

/**
 * @file Module for a self-correcting interval
 * @author Juhmer Tena <juhmertena@gmail.com>
 * @module AccurateInterval
 */

import * as ERRORS from './AccurateInterval.constants.mjs';
import AccurateIntervalError from './AccurateIntervalError.mjs';

/**
 * Class representing a self-correcting interval.
 *
 * @property {number} timer Timeout/interval ID
 * @property {number} expectedTime Expected timestamp the next tick would be run
 */
export class AccurateInterval {
    /**
     * Creates an accurate interval with an acceptable drift.\
     *
     * @param {Function} cb Callback function
     * @param {?any[]} args Arguments to the callback function
     * @param {number} interval Interval in milliseconds
     * @param {number} [acceptableDrift = 50] Allowed drift in milliseconds
     */
    constructor(cb, args, interval, acceptableDrift = 50) {
        if (typeof cb !== 'function') {
            throw new TypeError(ERRORS.INVALID_CB_ERR_MSG);
        }

        // Coerce to number and see if these are safe.
        const coercedInterval = Number(interval);
        if (!Number.isSafeInteger(coercedInterval) || Number(coercedInterval) <= 0) {
            throw new RangeError(ERRORS.INVALID_INTERVAL_ERR_MSG);
        }
        const coercedDrift = Number(acceptableDrift);
        if (!Number.isSafeInteger(coercedDrift) || Number(coercedDrift) < 0) {
            throw new RangeError(ERRORS.INVALID_DRIFT_ERR_MSG);
        }

        /** @type {Function} */
        this.cb = cb;

        /** @type {?any[]} */
        this.args = args;

        /** @type {number} */
        this.interval = coercedInterval;

        /** @type {number} */
        this.acceptableDrift = coercedDrift;

        /** @type {boolean} */
        this.running = false;
    }

    /**
     * Starts the accurate interval
     *
     * @throws {AccurateIntervalError} Timer should not already be running
     */
    start() {
        // Prevent it from multiple starts without stopping
        if (this.running) {
            throw new AccurateIntervalError(ERRORS.ALREADY_STARTED_ERR_MSG);
        } else {
            this.running = true;
        }

        this.expectedTime = Date.now() + this.interval;
        this.timer = setInterval(this.tick.bind(this), this.interval);
    }

    /**
     * Each run of the accurate interval
     *
     * @param {boolean} [attemptedCorrection = false] If the previous tick
     *     attempted to correct the drift
     * @private
     */
    tick(attemptedCorrection = false) {
        if (!this.running || typeof this.expectedTime === 'undefined') {
            throw new AccurateIntervalError(ERRORS.NOT_STARTED_ERR_MSG);
        }

        this.cb(...(this.args || []));

        const currentTime = Date.now();
        const drift = currentTime - this.expectedTime;

        this.expectedTime += this.interval;

        // If previousTime was undefined, then first execution. Otherwise, change according to drift
        if (Math.abs(drift) > this.acceptableDrift) {
            // If the drift was still larger, then clearing a used setTimeout does nothing
            clearInterval(this.timer);
            this.timer = setTimeout(
                this.tick.bind(this),
                Math.max(0, this.interval - drift),
                true
            );
        } else if (attemptedCorrection) {
            // This is a bit counterintuitive but resetting the interval to counteract the drift
            // results in less drift by predicting future delays.
            // Over 2 minutes: results in 6 drift corrections instead of 22 on Firefox
            this.timer = setInterval(
                this.tick.bind(this),
                Math.max(0, this.interval - drift),
                false
            );
        }
    }

    /**
     * Stops the accurate interval
     */
    stop() {
        if (!this.running) {
            throw new AccurateIntervalError(ERRORS.NOT_STARTED_ERR_MSG);
        } else {
            this.running = false;
        }

        clearInterval(this.timer);
        this.timer = undefined;
        this.expectedTime = undefined;
    }
}

export default AccurateInterval;
