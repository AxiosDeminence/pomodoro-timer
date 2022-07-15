// @ts-check

import exportedToolbox, { Toolbox } from './Toolbox.mjs';

describe('Construction', () => {
    it('Succeeds', () => {
        expect(() => new Toolbox()).not.toThrow();
    });

    it('Singleton at application-level', () => {
        expect(exportedToolbox).toBeInstanceOf(Toolbox);
    });
});

describe('Component usage', () => {
    const symbol = 'mock';
    const value = {};

    const toolbox = new Toolbox();

    it('Get a component that does not exist', () => {
        expect(() => toolbox.getComponent(symbol)).toThrow();
    });

    it('Register a component that does not exist', () => {
        expect(() => toolbox.registerComponent(symbol, value)).not.toThrow();
    });

    it('Get a component that exists', () => {
        expect(toolbox.getComponent(symbol)).toBe(value);
    });

    it('Register a component that already exists', () => {
        expect(() => toolbox.registerComponent(symbol, value)).toThrow();
    });
});
