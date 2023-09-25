describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})


//describe: scenario, it: test case