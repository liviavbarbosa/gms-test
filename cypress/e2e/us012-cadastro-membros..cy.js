/// <reference types="cypress"/>

describe('US012 - Funcionalidade: Cadastro de Membros', () => {
  it('Cadastro de usuário válido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Lívia')
    cy.get('#signup-lastname').type('Barbosa')
    cy.get('#signup-email').type('teste@teste.com')
    cy.get('#signup-phone').type('5512345678')
    cy.get('#signup-password').type('Teste!70')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro feito com sucesso!')
  })

  it('Cadastro de usuário com email duplicado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Ana')
    cy.get('#signup-lastname').type('Viana')
    cy.get('#signup-email').type('teste@teste.com')
    cy.get('#signup-password').type('Teste!70')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro feito com sucesso!')
  })

  it('Cadastro de usuário com campos obrigatórios vazios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Erro ao salvar o cadastro.')
  })
})