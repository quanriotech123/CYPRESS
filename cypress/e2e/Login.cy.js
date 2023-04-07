
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
it('Enter a valid email && an invalid password',()=>{
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

it('Enter a valid email && a valid password',()=>{
  cy.visit('http://blockchainmarketplace.quanrio.com/') 
  cy.get('.signUpBtnTxt').click()
  cy.get(':nth-child(1) > .form-control').type('shahjihan524@gmail.com')
  cy.get(':nth-child(2) > .form-control').type('abc')
  cy.get(':nth-child(2) > .btn').click()
  cy.get('.btn > .m-0').invoke('text').then($loginverfication=>{
  if($loginverfication=='Post New Request')
   { 
          cy.log('Test pass')
   }
   else{
          cy.log('Test Fail')
   }

  })
})
////////////////////////////////////////////////////////////
it('Click on the "Connect Metamask" button to connect your account with meta mask',()=>{

cy.visit('http://blockchainmarketplace.quanrio.com/')
cy.get('.signUpBtnTxt').click()
cy.get('.meta-mask').click()
cy.get(':nth-child(1) > .nav-link').invoke('text').then($log=>{

     cy.wrap($log)
  expect($log).to.contains('My projects')
})

})
/////////////////////////////////////////////////////////
it('After connecting with the wallet the profile icon has bee appeared',()=>{
  cy.visit('http://blockchainmarketplace.quanrio.com/')
  cy.get('.signUpBtnTxt').click()
cy.get('.meta-mask').click()
cy.get('.signUpBtnTxt').click()
cy.get('.meta-mask').click().should('be.visible')
})
//////////////////////////////////////////////////////

it('By default user account mode is client ',()=>{
  cy.visit('http://blockchainmarketplace.quanrio.com/')
  cy.get('.signUpBtnTxt').click()
  cy.get('.row > :nth-child(1) > .form-control').type('shahjihan524@gmail.com')
  cy.get('.row > :nth-child(2) > .form-control').type('abc')
  cy.get(':nth-child(2) > .btn').click()
  cy.get('.signUpBtnTxt > .profilePic').click()
   cy.get('.container > .nav-link').invoke('text').then($accountmode=>{
     expect($accountmode).to.equal('Switch to Service Provider')
  })
})
///////////////////////////////////////////////////////////////
it.only('Click on the "Switch to service provider" to switch your account mode',()=>{

  cy.visit('http://blockchainmarketplace.quanrio.com/')
  cy.get('.signUpBtnTxt').click()
  cy.get('.row > :nth-child(1) > .form-control').type('shahjihan524@gmail.com')
  cy.get('.row > :nth-child(2) > .form-control').type('abc')
  cy.get(':nth-child(2) > .btn').click()
  cy.get('.signUpBtnTxt > .profilePic').click()
  cy.get('.container > .nav-link').click()
  cy.get('.swal2-confirm').click()
  cy.get(':nth-child(1) > .nav-link').contains('Feeds')
  })
})




