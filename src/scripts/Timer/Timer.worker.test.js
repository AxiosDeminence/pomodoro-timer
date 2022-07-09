// @ts-check

import CountdownTimer from './CountdownTimer.mjs';
import processMessages, { timer } from './Timer.worker.mjs';

jest.mock('./CountdownTimer.mjs');

const startEv = new MessageEvent('message', { data: 10 });
const endEv = new MessageEvent('message', { data: 'stop' });

beforeEach(() => {
    /** @type {jest.Mock<Function>} */
    (timer.start).mockClear();

    /** @type {jest.Mock<Function>} */
    (timer.stop).mockClear();
});

it('Create the countdown timer', () => {
    expect(CountdownTimer).toHaveBeenCalledTimes(1);
});

it('Message the worker to start the time', () => {
    processMessages(startEv);
    expect(timer.start).toHaveBeenCalledTimes(1);
    expect(timer.start).toHaveBeenLastCalledWith(10);
    processMessages(endEv);
});

it('Message the worker to stop the time', () => {
    processMessages(startEv);
    processMessages(endEv);
    expect(timer.stop).toHaveBeenCalledTimes(1);
});

it('Message the worker to restart the timer', () => {
    processMessages(startEv);
    processMessages(new MessageEvent('message', { data: 11 }));
    expect(timer.start).toHaveBeenCalledTimes(2);
    expect(timer.start).toHaveBeenLastCalledWith(11);
    processMessages(endEv);
});

it('Invalid message passed to the timer', () => {
    const invalidPayload = 'happy';
    expect(() => processMessages(new MessageEvent('message', { data: invalidPayload })))
        .toThrowError(`Unknown message ${invalidPayload}`);
});
