// @ts-check

/**
 * @file An eventbus meant for global use to connect components together.
 * @author Juhmer Tena
 * @module EventBus.js
 */

/**
 * EventBus assumes will manage unsubscribing before event targets would disappear.
 */
export default class EventBus {
    constructor() {
        /** @type {Map<string, Set<number>>} */
        const subscriptions = new Map();

        /** @type {Map<number, Function>} */
        const callbacks = new Map();

        /** @type {number} */
        let subscriberUID = -1;

        /**
         * Adds a subscriber for an event dispatched through the EventBus.
         *
         * @param {string} eventType Event the callback is now listening for
         * @param {Function} cb Callback when the event is published
         * @returns {number} uid for the subscription
         */
        this.subscribe = (eventType, cb) => {
            // Prevent non-callbacks from being added
            if (typeof cb !== 'function') {
                throw new TypeError('Callback must be a function');
            }
            subscriberUID += 1;

            if (!subscriptions.has(eventType)) {
                subscriptions.set(eventType, new Set());
            }
            /** @type {Set<number>} */ (subscriptions.get(eventType)).add(subscriberUID);

            callbacks.set(subscriberUID, cb);

            return subscriberUID;
        };

        /**
         * Removes a subscriber for an event dispatched through the EventBus.
         *
         * @param {number} uid Token for the subscriber to be removed
         */
        this.unsubscribe = (uid) => {
            // If already unsubscribed or invalid uid
            if (!callbacks.has(uid)) {
                return;
            }
            callbacks.delete(uid);

            Array.from(subscriptions.values()).every((subscriberSet) => {
                if (subscriberSet.has(uid)) {
                    subscriberSet.delete(uid);
                    // Break out of the loop
                    return false;
                }

                return true;
            });
        };

        /**
         * Publish an event dispatched to the EventBus to all subscribers.
         *
         * @param {string} eventType Event to be published
         * @param {...any} args Args to be pushed to all subscriber callbacks
         */
        this.publish = (eventType, ...args) => {
            // If the event has no listeners, don't publish it but begin preparation for subscribers
            if (!subscriptions.has(eventType)) {
                subscriptions.set(eventType, new Set());
                return;
            }

            const subscribers = /** @type {Set<number>} */ (subscriptions.get(eventType));

            subscribers.forEach((uid) => {
                const callback = /** @type {Function} */ (callbacks.get(uid));
                callback(...args);
            });
        };
    }
}
