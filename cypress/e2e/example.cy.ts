import { Selectors } from "../support/selectors"
describe("Simple example of using Cypress", () => {
    
    it("Go to page from BASEURL parameter, and check title of the page", () => {
cy.visit('/')
cy.get(Selectors.pageHeader).should('have.text','Super Calculator');
    })
})