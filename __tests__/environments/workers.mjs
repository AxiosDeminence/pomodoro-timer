// @ts-check

import Worker from 'web-worker';
import { TestEnvironment as NodeEnvironment } from 'jest-environment-jsdom';

export default class WorkerEnvironment extends NodeEnvironment {
    async setup() {
        await super.setup();

        this.global.Worker = Worker;
    }
}
