Cypress.Commands.add('preencherCadastro', (nome, sobrenome, email, telefone, senha) => {
    if (nome !== null) {
        cy.get('#signup-firstname').type(nome)
    }
    if (sobrenome !== null) {
        cy.get('#signup-lastname').type(sobrenome)
    }
    if (email !== null) {
        cy.get('#signup-email').type(email)
    }
    if (telefone !== null) {
        cy.get('#signup-phone').type(telefone)
    }
    if (senha !== null) {
        cy.get('#signup-password').type(senha)
    }
    cy.get('#signup-button').click()
})