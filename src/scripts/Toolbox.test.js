// @ts-check

import Toolbox from './Toolbox.mjs';

describe('Construction', () => {
    let toolbox;

    it('Succeeds', () => {
        toolbox = new Toolbox();
    });

    it('Singleton', () => {
        const temp_toolbox = new Toolbox();
        expect(toolbox).toStrictEqual(temp_toolbox);
    });
});

describe('Component usage', () => {
    const symbol = 'mock';

    let toolbox = new Toolbox();

    it('Get a component that does not exist', () => {
        expect(toolbox.getComponent.bind(null, symbol)).toThrow();
    });

    it('Register a component that does not exist', () => {
        expect(toolbox.registerComponent.bind(null, symbol, symbol)).not.toThrow();
    });

    it('Get a component that exists', () => {
        expect(toolbox.getComponent.bind(null, symbol)).toEqual(symbol);
    });

    it('Register a component that already exists', () => {
        expect(toolbox.registerComponent.bind(null, symbol, symbol)).toThrow();
    });
});