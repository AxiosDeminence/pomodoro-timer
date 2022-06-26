// @ts-check

/**
 * @file An eventbus meant for global use to connect components together.
 * @author Juhmer Tena
 * @module EventBus.js
 */

class EventBus {
    #observers;

    /**
     * Adds a listener for an event dispatched to the EventBus.
     * @param {HTMLElement} elem - Element that listens for the event
     * @param {string} eventType - Event to be emitted to the element
     * @param {function} cb - Callback to be done for the event
     */
    listen(elem, eventType, cb) {
        this.#observers.push(new MutationObserver)
    }
}