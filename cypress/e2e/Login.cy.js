
import cls from "../POM/login1"

describe('', () => {

  it('Click on the login button when all fields remain blank', () => {
    cy.visit('http://blockchainmarketplace.quanrio.com/') 
    cy.get('.signUpBtnTxt').click()
    cy.get('.p-0 > a').click()
    cy.get('.d-flex > .btn').click()
    cy.get('#swal2-title').invoke('text').then($errormessage=>{
      
     if($errormessage=='Whoops...')
       {
        cy.log('Test Pass')
       }
     else{
        cy.log('Test Fail')
         }
    })
  })
  ///////////////////////////////////////////////////////////
  it('Enter an invalid email && a valid password',()=>{
    cy.visit('http://blockchainmarketplace.quanrio.com/') 
    cy.get('.signUpBtnTxt').click()
    cy.get(':nth-child(1) > .form-control').type('shahjehan@gm')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get(':nth-child(2) > .btn').click()
    cy.get('#swal2-title').invoke('text').then($errormessage=>{
      
      if($errormessage=='Whoops...')
      {
        cy.log('Test Pass')
      }
      else{
         cy.log('Test Fail')
      }
})
})
/////////////////////////////////////////////////////////
it.only('Enter a valid email && an invalid password',()=>{
  cy.visit('http://blockchainmarketplace.quanrio.com/') 
  cy.get('.signUpBtnTxt').click()
  cy.get(':nth-child(1) > .form-control').type('shahjehan@gmail.com')
  cy.get(':nth-child(2) > .form-control').type('123454545')
  cy.get(':nth-child(2) > .btn').click()
  cy.get('#swal2-title').invoke('text').then($errormessage=>{
    
    if($errormessage=='Whoops...')
    {
      cy.log('Test Pass')
    }
    else{
       cy.log('Test Fail')
    }
})
})
////////////////////////////////////////////////////////////
})


