/* eslint-disable jest/expect-expect */
// returning false here prevents Cypress from
// failing the test
Cypress.on('uncaught:exception', (err, runnable) => false);
describe(('task list and timer'), () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/source/src/views/index.html');
    });

    it('add task when timer has started', () => {
        // start timer
        cy.get('#start-btn').trigger('click');
        // add task 1
        cy.get('#task-popup-btn').trigger('click');
        cy.get('task-popup').shadow()
            .find('#add-task-popup')
            .should('have.css', 'display', 'block');
        cy.get('task-popup').shadow()
            .find('#task-input')
            .type('test item 1');
        cy.get('task-popup').shadow()
            .find('#add-task-btn').trigger('click');
        // task is added successfully
        cy.url().should(() => {
            expect(localStorage.getItem('id')).contains('1');
            expect(localStorage.getItem('tasks')).contains('test item 1');
        });
        // timer runs without affect
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
    });

    it(('start the timer while adding the task'), () => {
        cy.get('#task-popup-btn').trigger('click');
        cy.get('#start-btn').trigger('click');
        // timer runs without affect
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
        cy.get('task-popup').shadow()
            .find('#task-input')
            .type('test item 1');
        cy.get('task-popup').shadow()
            .find('#add-task-btn').trigger('click');
        // task is added successfully
        cy.get('#0').shadow()
            .find('li')
            .should('have.text', 'test item 1');
        cy.url().should(() => {
            expect(localStorage.getItem('id')).contains('1');
            expect(localStorage.getItem('tasks')).contains('test item 1');
        });
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
    });

    it('cancel add task when timer has started', () => {
        // start timer
        cy.get('#start-btn').trigger('click');
        cy.get('#task-popup-btn').trigger('click');
        cy.get('task-popup').shadow()
            .find('#close-icon').trigger('click');
        // timer runs without affect
        cy.get('task-item').should('have.length', 0);
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
    });

    it(('start the timer while adding the task then cancel'), () => {
        cy.get('#task-popup-btn').trigger('click');
        cy.get('#start-btn').trigger('click');
        // timer runs without affect
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
        cy.get('task-popup').shadow()
            .find('#close-icon').trigger('click');
        cy.get('task-item').should('have.length', 0);
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
    });

    it(('toggle the tasks while timer is runing'), () => {
        cy.get('#task-popup-btn').trigger('click');
        cy.get('task-popup').shadow()
            .find('#task-input')
            .type('test item 1');
        cy.get('task-popup').shadow()
            .find('#add-task-btn').trigger('click');
        cy.get('#start-btn').trigger('click');
        cy.get('#0').trigger('click');
        cy.get('#0').should('have.css', 'text-decoration', 'line-through solid rgba(255, 255, 255, 0.65)');
        cy.get('#0').trigger('click');
        cy.get('#0').should('not.have.css', 'text-decoration', 'line-through solid rgba(255, 255, 255, 0.65)');
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
    });

    it(('delete the tasks while timer is runing'), () => {
        cy.get('#task-popup-btn').trigger('click');
        cy.get('task-popup').shadow()
            .find('#task-input')
            .type('test item 1');
        cy.get('task-popup').shadow()
            .find('#add-task-btn').trigger('click');
        cy.get('#start-btn').trigger('click');
        cy.get('#0').shadow()
            .find('img').click({ force: true });
        cy.get('#0').should('have.length', 0);
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
    });
});

describe('reset popup and timer', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/source/src/views/index.html');
        // add task 1
        cy.get('#task-popup-btn').trigger('click');
        cy.get('task-popup').shadow()
            .find('#task-input')
            .type('test item 1');
        cy.get('task-popup').shadow()
            .find('#add-task-btn').trigger('click');
        // add task 2
        cy.get('#task-popup-btn').trigger('click');
        cy.get('task-popup').shadow()
            .find('#task-input')
            .type('test item 2');
        cy.get('task-popup').shadow()
            .find('#add-task-btn').trigger('click');
    });

    it(('reset when timer has started'), () => {
        cy.get('#start-btn').click();
        cy.get('#reset-button').click();
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
        cy.get('reset-popup').shadow()
            .find('#confirm-reset-btn').click();
        cy.get('#timer_display_duration').should('have.text', '25:00');
        cy.get('#start-btn').should('have.text', 'Start');
        cy.get('task-item').should('have.length', 0);
        cy.url().should(() => {
            expect(localStorage.getItem('id')).contains('0');
            expect(localStorage.getItem('tasks')).contains('[]');
        });
    });

    it(('start the timer when reset'), () => {
        cy.get('#reset-button').click();
        cy.get('#start-btn').click();
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
        cy.get('reset-popup').shadow()
            .find('#confirm-reset-btn').click();
        cy.get('#timer_display_duration').should('have.text', '25:00');
        cy.get('#start-btn').should('have.text', 'Start');
        cy.get('task-item').should('have.length', 0);
        cy.url().should(() => {
            expect(localStorage.getItem('id')).contains('0');
            expect(localStorage.getItem('tasks')).contains('[]');
        });
    });

    it(('reset then cancel when timer has started'), () => {
        cy.get('#start-btn').click();
        cy.get('#reset-button').click();
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
        cy.get('reset-popup').shadow()
            .find('#close-icon').click();
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
        cy.get('#start-btn').should('have.text', 'Stop');
        cy.get('task-item').should('have.length', 2);
    });

    it(('start the timer when reset then cancel'), () => {
        cy.get('#reset-button').click();
        cy.get('#start-btn').click();
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
        cy.get('reset-popup').shadow()
            .find('#close-icon').click();
        cy.get('#timer_display_duration').should('not.have.text', '25:00');
        cy.get('#start-btn').should('have.text', 'Stop');
        cy.get('task-item').should('have.length', 2);
    });
});

describe('setting popup and timer', () => {
    beforeEach(() => {
        cy.clock();
        cy.visit('http://127.0.0.1:5500/source/src/views/index.html');
    });

    afterEach(() => {
        cy.clock().then((clock) => {
            clock.restore();
        });
    });

    // it('create adn display setting popup when setting button is clicked', () => {
    //     cy.get('#setting-button').trigger('click');
    //     cy.get('settings-popup').should('have.length', 1);
    //     cy.get('settings-popup').shadow()
    //         .find('#settings-confirm-popup')
    //         .should('have.css', 'display', 'block');
    // });

    // it(('set pomo time to 3'), () => {
    //     cy.clock().then((clock) => {
    //         clock.restore();
    //     });
    //     cy.get('#setting-button').trigger('click');
    //     cy.get('settings-popup').shadow()
    //         .find('#pomo-length-input')
    //         .invoke('val', 3);
    //     cy.get('settings-popup').shadow()
    //         .find('#confirm-settings-btn')
    //         .trigger('click');
    //     cy.get('#timer_display_duration').should('have.text', '3:00');
    // });

    // it(('set short break time to 1'), () => {
    //     cy.get('#setting-button').trigger('click');
    //     const settingPopup = cy.get('settings-popup').shadow();
    //     settingPopup.find('#pomo-length-input').invoke('val', 3);
    //     cy.get('settings-popup').shadow()
    //         .find('#short-break-input').invoke('val', 1);
    //     cy.get('settings-popup').shadow()
    //         .find('#confirm-settings-btn')
    //         .trigger('click');
    //     cy.get('#start-btn').trigger('click');
    //     cy.tick(181000);
    //     cy.get('#timer_display_duration').should('have.text', '0:59');
    // });

    // it(('set long break time to 2'), () => {
    //     cy.get('#setting-button').trigger('click');
    //     const settingPopup = cy.get('settings-popup').shadow();
    //     settingPopup.find('#pomo-length-input').invoke('val', 3);
    //     cy.get('settings-popup').shadow()
    //         .find('#short-break-input').invoke('val', 1);
    //     cy.get('settings-popup').shadow()
    //         .find('#long-break-input').invoke('val', 2);
    //     cy.get('settings-popup').shadow()
    //         .find('#confirm-settings-btn')
    //         .trigger('click');
    //     cy.get('#start-btn').trigger('click');
    //     // a long break after 3 pomo sections
    //     cy.tick(240000);
    //     cy.tick(240000);
    //     cy.tick(240000);
    //     cy.tick(181000);
    //     cy.get('#timer_display_duration').should('have.text', '1:59');
    // });

    // it(('cancel setting'), () => {
    //     cy.clock().then((clock) => {
    //         clock.restore();
    //     });
    //     cy.get('#setting-button').trigger('click');
    //     cy.get('settings-popup').shadow()
    //         .find('#pomo-length-input')
    //         .invoke('val', 3);
    //     cy.get('settings-popup').shadow()
    //         .find('#confirm-settings-btn')
    //         .trigger('click');
    //     cy.get('#setting-button').trigger('click');
    //     cy.get('settings-popup').shadow()
    //         .find('#pomo-length-input').invoke('val', 5);
    //     cy.get('settings-popup').shadow()
    //         .find('#cancel-settings-btn').trigger('click');
    //     cy.get('#timer_display_duration').should('have.text', '3:00');
    // });

    it.only(('set time while timer is runing, stop and reset the timer'), () => {
        cy.get('#start-btn').trigger('click');
        cy.tick(5000);
        cy.clock().then((clock) => {
            clock.restore();
        });
        cy.get('#setting-button').trigger('click');
        cy.get('settings-popup').shadow()
            .find('#pomo-length-input')
            .invoke('val', 3);
        cy.get('settings-popup').shadow()
            .find('#confirm-settings-btn')
            .trigger('click');
        cy.get('#timer_display_duration').should('have.text', '3:00');
        cy.get('#start-btn').should('have.text', 'Start');
    });

    it.only(('set time then cancel while timer is runing'), () => {
        cy.get('#start-btn').trigger('click');
        cy.tick(5000);
        cy.clock().then((clock) => {
            clock.restore();
        });
        cy.get('#setting-button').trigger('click');
        cy.get('settings-popup').shadow()
            .find('#pomo-length-input')
            .invoke('val', 3);
        cy.get('settings-popup').shadow()
            .find('#confirm-settings-btn')
            .trigger('click');
        cy.get('#timer_display_duration').should('have.text', '3:00');
        cy.get('#start-btn').should('have.text', 'Start');
    });
});
