describe('Sign-up Test cases', () => {  
      
  it('Create an account with valid data', () => {
    cy.createaccount();
  })
//////////////////////////////////////////////////////////////////////////////////////
it('Create an account with a previously used email',()=>{
  cy.visit('http://blockchainmarketplace.quanrio.com/')
  cy.get('.signUpBtnTxt').click()
  cy.get('.p-0 > a').click()
  cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('shah')
  cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('jehan')
  cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('lk')
  cy.get(':nth-child(2) > :nth-child(2) > .form-control').type(`shahjihan524@gmail.com`)
  cy.get(':nth-child(3) > .form-control').type('abc')
  cy.get('.d-flex > .btn').click()
  cy.get('#swal2-title').invoke('text').then($t=>{
    
     if($t=='Whoops...')
     {
      cy.log('Test pass')
     }
     else{
       cy.log('Test fail')
     }
  })
})
////////////////////////////////////////////////////////////////////////////////////////
it.only('Click on the  cross icon to close the sign-up screen',()=>{
  cy.visit('http://blockchainmarketplace.quanrio.com/')
  cy.get('.signUpBtnTxt').click()
  cy.get('.p-0 > a').click()
  cy.get('.close').click()
  cy.log('Test Pass')
})
////////////////////////////////////////////////////////

})