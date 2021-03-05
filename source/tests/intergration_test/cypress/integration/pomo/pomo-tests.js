describe('Intergration test', () => {
    Cypress.on('uncaught:exception', (err, runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false);

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/source/src/views/index.html');
    });

    it('First Test', () => {
        expect(true).to.equal(true);
    });
});
