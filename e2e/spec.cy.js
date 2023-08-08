function random_string(length, status=false){
  let string = ''

  let dict = {
    1:'a' , 2:'b' , 3:'c' , 4:'d' , 5:'e' , 
    6:'f' , 7:'g' , 8:'h' , 9:'i' , 10:'j', 
    11:'k', 12:'l', 13:'m', 14:'n', 15:'o', 
    16:'p', 17:'q', 18:'r', 19:'s', 20:'t', 
    21:'u', 22:'v', 23:'w', 24:'x', 25:'y', 
    26:'z'  
}

  for (let i = 0; i < length; i++) string += dict[Math.floor(Math.random() * 26) + 1];
  // string = (array.map(dict[Math.floor(Math.random() * 26) + 1], )=>{})
 
  if (status){
        string += '@gmail.com'
  }
  if (Number(length) === 0){
    return Math.floor(Math.random() * 9) + 1
  }
  return string
}
let a 
function noone_was_registered_checker(){
  cy.get('[jsname="B34EJ"]>div')
  if (cy.contains('That username is taken. Try another.')) {
    let string = random_string(10)
    cy.get('[aria-label="Create a Gmail address"]').clear()
    cy.wait(5000)
    cy.get('[aria-label="Create a Gmail address"]').type(string)
    cy.wait(5000)
    cy.contains('Next').click()
    
    } else {
      return true
    }
}

// <reference types="Cypress" />
describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://mail.google.com/mail/')
    cy.contains('Create account').click()
    cy.contains('For my personal use').click()
    cy.get('[tabindex="0"]').click({ multiple: true })
    cy.get('[data-value="en"]').click()
    let string = random_string(10)
    
    cy.get('[aria-label="First name"]').type(string, { force: true })
    cy.contains('Next').click()
    cy.get('[id="month"]').select('January')
    cy.get('[name="day"]').type(random_string(0))
    cy.get('[name="year"]').type(String(200) + String(random_string(0)))
    cy.get('[id="gender"]').select('Male')
    cy.contains('Next').click()
    cy.contains('Create your own Gmail address').click()
    cy.get('[aria-label="Create a Gmail address"]').type(string)
    cy.wait(5000)
    cy.contains('Next').click().then(()=>{
      if (noone_was_registered_checker()){
        cy.contains('Next').click()
      } else {
        noone_was_registered_checker()  
      }
    })

    cy.wait(10000)
    
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('eshkere@gmail.com')
    cy.get('.action-email').should('have.value', 'eshkere@gmail.com')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click('')
  
    cy.get('#action-canvas').click()
    cy.visit('https://mail.google.com/mail/')
  })
})
