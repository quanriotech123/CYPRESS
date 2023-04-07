describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://imsciences.edu.pk/')
    cy.get('#menu-item-1893 > .dropdown-togglee').invoke('show').click()
    cy.contains('Core Values').click({force: true})
    cy.url().should('include','core-values')     
  })
})