
import cls from "../POM/login1"

describe('template spec', () => {

  
  it('passes', () => {
    cy.visit('http://blockchainmarketplace.quanrio.com/')
    const ln = new cls();
    ln.clickloginbtn()
    ln.enterusername('lkajlkdjlajdlff')
    ln.enterpassword('khan ali')

  })
})