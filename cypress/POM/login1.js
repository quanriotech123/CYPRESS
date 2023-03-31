
class cls{
    
 clickloginbtn()
 {
    cy.get('.signUpBtnTxt').click()
 }

 enterusername(username)
 {
    cy.get(':nth-child(1) > .form-control').type(username)
 }
 enterpassword(password)
 {
    cy.get(':nth-child(2) > .form-control').type(password)
 }


}
export default cls;