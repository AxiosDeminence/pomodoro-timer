// @ts-check

import Worker from 'web-worker';
import { TestEnvironment as NodeEnvironment } from 'jest-environment-node';

export default class WorkerEnvironment extends NodeEnvironment {
    constructor(config, context) {
        super(config, context);
    }

    async setup() {
        await super.setup();

        this.global.Worker = Worker;
    }

    async teardown() {
        await super.teardown();
    }

    getVmContext() {
        return super.getVmContext();
    }
}