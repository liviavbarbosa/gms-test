/// <reference types="cypress"/>

describe('US012 - Funcionalidade: Cadastro de Membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Cadastro de usuário válido', () => {
    var email = `livia${Date.now()}@teste.com`
    cy.preencherCadastro('Lívia', 'Barbosa', email, '5512345678', 'Teste!70')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Cadastro de usuário com email duplicado', () => {
    cy.preencherCadastro('Lívia', 'Barbosa', 'livia@teste.com', '5512345678', 'Teste!70')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  })

  it('Cadastro de usuário com nome vazio', () => {
    var email = `livia${Date.now()}@teste.com`
    cy.preencherCadastro(null, 'Barbosa', email, '5512345678', 'Teste!70')
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })

  it('Cadastro de usuário com nome inválido', () => {
    var email = `livia${Date.now()}@teste.com`
    cy.preencherCadastro('Lívia70', 'Barbosa', email, '5512345678', 'Teste!70')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Cadastro de usuário com sobrenome vazio', () => {
    var email = `livia${Date.now()}@teste.com`
    cy.preencherCadastro('Lívia', null, email, '5512345678', 'Teste!70')
    cy.get('#signup-response').should('contain', 'Sobrenome não pode estar vazio')
  })

  it('Cadastro de usuário com sobrenome inválido', () => {
    var email = `livia${Date.now()}@teste.com`
    cy.preencherCadastro('Lívia', 'Barbosa@', email, '5512345678', 'Teste!70')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Cadastro de usuário com email vazio', () => {
    cy.preencherCadastro('Lívia', 'Barbosa', null, '5512345678', 'Teste!70')
    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
  })

  it('Cadastro de usuário com email inválido', () => {
    cy.preencherCadastro('Lívia', 'Barbosa', 'livia.com', '5512345678', 'Teste!70')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('Cadastro de usuário com telefone inválido', () => {
    var email = `livia${Date.now()}@teste.com`
    cy.preencherCadastro('Lívia', 'Barbosa', email, 'teste', 'Teste!70')
    cy.get('#signup-response').should('contain', 'Telefone deve conter apenas números')
  })

  it('Cadastro de usuário com senha vazia', () => {
    var email = `livia${Date.now()}@teste.com`
    cy.preencherCadastro('Lívia', 'Barbosa', email, null, null)
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  })

  it.only('Cadastro de usuário com senha inválida', () => {
    var email = `livia${Date.now()}@teste.com`
    cy.preencherCadastro('Lívia', 'Barbosa', email, null, 'teste')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
})