// @ts-check

import { CountdownTimer } from './CountdownTimer.mjs';
import processMessages from './Timer.worker.mjs';

jest.mock('./CountdownTimer.mjs');

const spyStart = jest.spyOn(CountdownTimer.prototype, 'start');
const spyStop = jest.spyOn(CountdownTimer.prototype, 'stop');

const startEv = new MessageEvent('message', { data: 10 });
const endEv = new MessageEvent('message', { data: 'stop' });

beforeEach(() => {
    spyStart.mockClear();
    spyStop.mockClear();
});

it('Create the countdown timer', () => {
    expect(CountdownTimer).toHaveBeenCalledTimes(1);
});

it('Message the worker to start the time', () => {
    processMessages(startEv);
    expect(spyStart).toHaveBeenCalledTimes(1);
    expect(spyStart).toHaveBeenLastCalledWith(10);
    processMessages(endEv);
});

it('Message the worker to stop the time', () => {
    processMessages(startEv);
    processMessages(endEv);
    expect(spyStop).toHaveBeenCalledTimes(1);
});

it('Message the worker to restart the timer', () => {
    processMessages(startEv);
    processMessages(new MessageEvent('message', { data: 11 }));
    expect(spyStart).toHaveBeenCalledTimes(2);
    expect(spyStart).toHaveBeenLastCalledWith(11);
    processMessages(endEv);
});

it('Invalid message passed to the timer', () => {
    const invalidPayload = 'happy';
    expect(() => processMessages(new MessageEvent('message', { data: invalidPayload })))
        .toThrowError(`Unknown message ${invalidPayload}`);
});
