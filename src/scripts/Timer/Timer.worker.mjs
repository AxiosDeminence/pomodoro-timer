// @ts-check
// eslint-disable no-restricted-globals

/**
 * @file Webworker for the pomodoro timer. Used when browser/environment supports
 * webworkers and maintains driftless intervals.
 * @author Juhmer Tena
 * @module Timer.worker.mjs
 */

import { ACCEPTABLE_DRIFT, SECOND } from '../Constants.mjs';
import CountdownTimer from './CountdownTimer.mjs';

/** @type {CountdownTimer} */
export let timer = new CountdownTimer(true, SECOND, ACCEPTABLE_DRIFT);

/**
 * Listen to messages for the timer webworker to control the CountdownTimer.
 * @listens Worker#message
 * @param {MessageEvent} ev - Message event from main JavaScript thread
 */
export default function processMessages(ev) {
    if (ev.data === 'stop') {
        timer.stop();
        return;
    }

    const totalTime = parseInt(ev.data, 10);
    if (Number.isNaN(totalTime)) {
        throw new Error(`Unknown message ${ev.data}`);
    }
    timer.start(totalTime);
}

self.addEventListener('message', processMessages);
