// @ts-check

/**
 * Errors for the @see {@link AccurateInterval} class.
 */
export class AccurateIntervalError extends Error {
    /**
     * Creates an error for the @see {@link AccurateInterval} class.
     * @param {ConstructorParameters<typeof Error>} args
     */
    constructor(...args) {
        super(...args);
    }
}

/**
 * Class representing a self-correcting interval.
 * @property {(timeoutID|intervalID)} timer - Maintains timeouts/intervals and checks it
 *     against the drift.
 * @property {number} expectedTime - Expected tiemstamp the next tick would be run
 */
export default class AccurateInterval {
    /**
     * Creates an accurate interval with an acceptable drift.
     * @param {!function} cb - Callback function
     * @param {any[]} args - Arguments to the callback function
     * @param {!number} interval - Interval in milliseconds
     * @param {!number} [acceptableDrift=50] - Allowed drift in milliseconds
     */
    constructor(cb, args, interval, acceptableDrift) {
        if (typeof cb !== 'function') {
            throw new TypeError('Callback is not a function');
        }

        // Coerce to number and see if these are safe.
        const coercedInterval = Number(interval);
        if (!Number.isSafeInteger(coercedInterval) || Number(coercedInterval) <= 0) {
            throw new RangeError('Interval must be larger than 0');
        }
        const coercedDrift = Number(acceptableDrift);
        if (!Number.isSafeInteger(coercedDrift) || Number(coercedDrift) < 0) {
            throw new RangeError('acceptableDrift cannot be less than 0');
        }

        this.cb = cb;
        this.args = args;
        this.interval = coercedInterval;
        this.acceptableDrift = coercedDrift;
        this.running = false;
    }

    /**
     * Starts the accurate interval
     * @param {boolean} zeroTick - Checks to see if we want a zerotick callback run.
     */
    start(zeroTick=false) {
        // Prevent it from multiple starts without stopping
        if (this.running) {
            throw new AccurateIntervalError('AccurateInterval already started.')
        } else {
            this.running = true;
        }

        // If we want a zerotick, then we want to immediately
        if (zeroTick) {
            this.tick(true);
        } else {
            this.expectedTime = Date.now() + this.interval;
            this.timer = setInterval(this.tick.bind(this), this.interval);
        }
    }

    /**
     * Each run of the accurate interval
     * @param {boolean} attemptedCorrection
     */
    tick(attemptedCorrection=false) {
        this.cb(...(this.args || []));

        const currentTime = Date.now();
        if (typeof this.expectedTime === 'undefined') this.expectedTime = currentTime;
        const drift = currentTime - this.expectedTime;

        this.expectedTime += this.interval;

        // If previousTime was undefined, then first execution. Otherwise, change according to drift
        if (Math.abs(drift) > this.acceptableDrift) {
            // If the drift was still larger, then clearing a used setTimeout does nothing
            clearInterval(this.timer);
            this.timer = setTimeout(this.tick.bind(this), Math.max(0, this.interval - drift), true);
        } else if (attemptedCorrection) {
            // This is a bit counterintuitive but resetting the interval to counteract the drift
            // results in less drift by predicting future delays.
            // Over 2 minutes: results in 6 drift corrections instead of 22 on Firefox
            this.timer = setInterval(this.tick.bind(this),
                Math.max(0, this.interval - drift), false);
        }
    }

    /**
     * Stops the accurate interval
     */
    stop() {
        if (!this.running) {
            throw new AccurateIntervalError('AccurateInterval has not started.');
        } else {
            this.running = false;
        }

        clearInterval(this.timer);
        this.timer = undefined;
        this.expectedTime = undefined;
    }
}