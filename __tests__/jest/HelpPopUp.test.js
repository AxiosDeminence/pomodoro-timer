import { addTemplates, dispatchDOMLoadedEvent } from '../utils.js';
import { HELP_POPUP_TEMPLATE } from '../Constants.js';

let pageTemplate;

beforeAll(() => {
    Object.defineProperty(document, 'readyState', {
        get() { return 'loading'; },
    });
    window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };

    return addTemplates([
        HELP_POPUP_TEMPLATE,
    ], __dirname).then((templates) => {
        pageTemplate = `
            ${templates}
            <button class="top-buttons" id="help-button">
                <img src="icons/help.svg" id="help" class="top-button-img" alt="help">
            </button>
            <help-popup></help-popup>
        `;
    }).then(() => {
        require('../../src/components/HelpPopUp');
    });
});

beforeEach(() => {
    localStorage.setItem('volume', 50);
    localStorage.setItem('tasks', '[]');
    localStorage.setItem('id', '0');
    document.body.innerHTML = pageTemplate;
    dispatchDOMLoadedEvent(window);
});

// Used to prevent multiple custom element registers
afterEach(() => {
    jest.resetModules();
});

test(('popup help window when help button is clicked'), () => {
    const helpBtn = document.getElementById('help-button');
    helpBtn.click();
    const helpPopUp = document.querySelector('help-popup');
    expect(helpPopUp.shadowRoot.getElementById('help-popup').style.display).toBe('block');
});

test(('close icon works properly'), () => {
    const helpBtn = document.getElementById('help-button');
    helpBtn.click();
    const helpPopUp = document.querySelector('help-popup');
    const close = helpPopUp.shadowRoot.getElementById('close-icon');
    close.click();
    expect(helpPopUp.shadowRoot.getElementById('help-popup').style.display).toBe('none');
});
