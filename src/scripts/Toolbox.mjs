// @ts-check

/** @type {Toolbox} */
let toolbox;

export default class Toolbox {
    constructor() {
        if (typeof toolbox === 'undefined') {
            toolbox = this;
        }

        /** @type {Map<string, Object>} */
        this.components = new Map();

        return toolbox;
    }

    getComponent(key) {
        if (!this.components.has(key)) {
            throw new Error(`Component ${key} not registered`);
        }

        return this.components.get(key);
    }

    registerComponent(key, component) {
        if (this.components.has(key)) {
            throw new Error(`Component ${key} already registered`);
        }

        this.components.set(key, component);
    }
}