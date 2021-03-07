/* eslint-disable jest/expect-expect */
describe('Intergration test', () => {
    // returning false here prevents Cypress from
    // failing the test
    Cypress.on('uncaught:exception', (err, runnable) => false);

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/source/src/views/index.html');
    });

    it('create adn display setting popup when setting button is clicked', () => {
        cy.get('#setting-button').trigger('click');
        cy.get('settings-popup').should('have.length', 1);
        cy.get('settings-popup').shadow()
            .find('#settings-confirm-popup')
            .should('have.css', 'display', 'block');
    });

    it(('set pomo time to 3'), () => {
        cy.get('#setting-button').trigger('click');
        cy.get('settings-popup').shadow()
            .find('#pomo-length-input')
            .invoke('val', 3);
        cy.get('settings-popup').shadow()
            .find('#confirm-settings-btn')
            .trigger('click');
        cy.get('#timer_display_duration').should('have.text', '3:00');
    });
});
