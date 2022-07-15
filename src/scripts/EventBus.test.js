// @ts-check

import EventBus from './EventBus';

const SAMPLE_EVENT_1 = 'happy';
const SAMPLE_EVENT_2 = 'sad';
const UNUSED_EVENT = 'mad';

describe('Token behavior', () => {
    const pubsub = new EventBus();

    it('Subscriptions are bound to a token', () => {
        expect(pubsub.subscribe(SAMPLE_EVENT_1, () => { })).toEqual(0);
    });

    it('Each token is unique', () => {
        expect(pubsub.subscribe(SAMPLE_EVENT_2, () => { })).toEqual(1);
    });
});

describe('Pub/sub behavior', () => {
    /** @type {EventBus} */
    let pubsub;

    /** @type {any[]} */
    let passedArgs;

    const spy = jest.fn((...args) => { passedArgs = args; });

    beforeEach(() => {
        spy.mockClear();
        pubsub = new EventBus();
        passedArgs = [];
    });

    it('Subscriptions must provide a valid callback', () => {
        // @ts-expect-error
        expect(() => pubsub.subscribe(SAMPLE_EVENT_1, 1)).toThrowError(TypeError);
    });

    it('Single subscription gets notified', () => {
        pubsub.subscribe(SAMPLE_EVENT_1, spy);
        pubsub.publish(SAMPLE_EVENT_1);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Multiple subscriptions get notified', () => {
        pubsub.subscribe(SAMPLE_EVENT_1, spy);
        pubsub.subscribe(SAMPLE_EVENT_1, spy);
        pubsub.publish(SAMPLE_EVENT_1);
        expect(spy).toHaveBeenCalledTimes(2);
    });

    it('Subscriptions are scoped to specific events', () => {
        pubsub.publish(UNUSED_EVENT, spy);
        expect(spy).toHaveBeenCalledTimes(0);

        pubsub.subscribe(SAMPLE_EVENT_1, spy);
        pubsub.subscribe(SAMPLE_EVENT_2, spy);
        pubsub.publish(SAMPLE_EVENT_1);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Subscriptions can be removed', () => {
        const uid = pubsub.subscribe(SAMPLE_EVENT_1, spy);
        pubsub.unsubscribe(uid);

        pubsub.publish(SAMPLE_EVENT_1);
        expect(spy).toHaveBeenCalledTimes(0);
    });

    it('Subscription removal is idempotent', () => {
        const uid = pubsub.subscribe(SAMPLE_EVENT_1, spy);
        pubsub.unsubscribe(uid);
        // Does not throw
        expect(() => pubsub.unsubscribe(uid)).not.toThrow();
    });

    it('Unsubscribing does not remove other subscriptions for same event', () => {
        const uid = pubsub.subscribe(SAMPLE_EVENT_1, spy);
        pubsub.subscribe(SAMPLE_EVENT_1, spy);

        pubsub.unsubscribe(uid);
        pubsub.publish(SAMPLE_EVENT_1);

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Unsubscribing does not remove other subscriptions for different event', () => {
        pubsub.subscribe(SAMPLE_EVENT_1, spy);
        const uid = pubsub.subscribe(SAMPLE_EVENT_2, spy);

        pubsub.unsubscribe(uid);

        pubsub.publish(SAMPLE_EVENT_1);
        pubsub.publish(SAMPLE_EVENT_2);

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Publishing passes arguments', () => {
        const args = ['a', 'b', 'c'];
        pubsub.subscribe(SAMPLE_EVENT_1, spy);
        pubsub.publish(SAMPLE_EVENT_1, ...args);

        expect(args).toEqual(passedArgs);
    });
});
