// @ts-check

/** @type {Toolbox} */
let toolbox;

export default class Toolbox {
    constructor() {
        if (typeof toolbox !== 'undefined') {
            return toolbox;
        }
        toolbox = this;

        /** @type {Map<string, object>} */
        this.components = new Map();
    }

    /**
     * 
     * @param {string} key 
     * @returns {object}
     */
    getComponent(key) {
        if (!this.components.has(key)) {
            throw new Error(`Component ${key} not registered`);
        }

        return /** @type {object} */ (this.components.get(key));
    }

    /**
     * 
     * @param {string} key 
     * @param {object} component 
     */
    registerComponent(key, component) {
        if (this.components.has(key)) {
            throw new Error(`Component ${key} already registered`);
        }

        this.components.set(key, component);
    }
}