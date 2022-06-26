// @ts-check
// eslint-disable no-restricted-globals

/**
 * @file Webworker for the pomodoro timer. Used when browser/environment supports
 * webworkers and maintains driftless intervals.
 * @author Juhmer Tena
 * @module Timer.worker.js
 */

import { ACCEPTABLE_DRIFT, SECOND } from '../constants.mjs';
import CountdownTimer from './CountdownTimer.mjs';

/** @type {CountdownTimer} */
let timer = new CountdownTimer(true, SECOND, ACCEPTABLE_DRIFT);

/**
 * Listen to messages for the timer webworker.
 * @listens Worker#message
 * @param {Event} ev - Message event from main JavaScript thread
 */
self.addEventListener('message', (ev) => {
    timer.stop();

    if (ev.data === 'stop') {
        return;
    }

    const totalTime = parseInt(ev.data, 10);

    if (Number.isNaN(totalTime)) {
        throw new Error(`Unknown message ${ev.data}`);
    }

    timer.start(totalTime);
});

export {};