/// <reference types="cypress"/>

describe('US001 - Funcionalidade: Busca de filmes', () => {
    it('Busca de filmes com palavra-chave válida/Exibição correta das informações dos filmes', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').type("The Matrix")
      cy.get('#search-button').click()
    })

    it('Busca de filmes com palavra-chave válida', () => {
        cy.visit('http://127.0.0.1:8080/')
        cy.get('#search-input').type("A Era do Gelo 3")
        cy.get('#search-button').click()
        cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
    })

    it('Limpeza de campo de busca de filmes', () => {
        cy.visit('http://127.0.0.1:8080/')
        cy.get('#search-input').type("A Era do Gelo 3")
        cy.get('#clear-button').click()
        cy.get('#search-input').should('be.empty')
    })

    it('Busca de filmes sem inserir palavra-chave', () => {
        cy.visit('http://127.0.0.1:8080/')
        cy.get('#clear-button').click()
    })

    it('Resultado de busca em tempo real', () => {
        cy.visit('http://127.0.0.1:8080/')
        cy.get('#search-input').type("Incep") // Só escrevendo, ele ainda não retorna a lista dos títulos que contém essa palavra-chave
        cy.get('#search-button').click()
        cy.get('#results-section > p').should('not.contain', 'Filme não encontrado.')
    })

    it('Suporte à paginação ou rolagem infinita', () => {
        cy.visit('http://127.0.0.1:8080/')
        cy.get('#search-input').type("Jurassic Park")
        cy.get('#search-button').click()
    })
})