// @ts-check

/**
 * Toolbox to register and retrieve components for lifecycle management
 */
export class Toolbox {
    constructor() {
        /**
         * Map maintaining all components in the toolbox
         *
         * @type {Map<string, object>}
         * @private
         */
        this.components = new Map();
    }

    /**
     * Retrieve a component from the toolbox
     *
     * @param {string} key The key the component is registered with
     * @returns {object} The retrieved component
     */
    getComponent(key) {
        if (!this.components.has(key)) {
            throw new Error(`Component ${key} not registered`);
        }

        return /** @type {object} */ (this.components.get(key));
    }

    /**
     * Add a component into the toolbox
     *
     * @param {string} key The key to register the component with
     * @param {object} component The component to register
     */
    registerComponent(key, component) {
        if (this.components.has(key)) {
            throw new Error(`Component ${key} already registered`);
        }

        this.components.set(key, component);
    }
}

/** Application level toolbox to be passed around and used */
const toolbox = new Toolbox();
export default toolbox;
