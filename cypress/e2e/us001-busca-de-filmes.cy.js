/// <reference types="cypress"/>

describe('US001 - Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('CT01 - Busca de filmes com palavra-chave válida', () => {
        cy.preencherEBuscar("The Matrix")
        cy.get('#results-section').should('contain', 'The Matrix')
    })

    it('CT02 - Busca de filmes sem resultados', () => {
        cy.preencherEBuscar("A Era do Gelo")
        cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
    })

    it('CT03 - Limpeza de campo de busca de filmes', () => {
        cy.preencherELimpar("Inception")
        cy.get('#search-input').should('be.empty')
    })

    it('CT04 - Busca de filmes sem inserir palavra-chave', () => {
        cy.preencherEBuscar(null)
        cy.get('#results-section img').get('#popcorn').should('exist')
    })

    it('CT05 - Exibição correta das informações dos filmes', () => {
        cy.preencherEBuscar('Inception')
        cy.get('#results-section h3').should('exist')
        cy.get('#results-section img').should('exist')
        cy.get('#results-section').should('contain', 'Sinopse')
    })

    it('CT06 - Resultado de busca em tempo real', () => {
        cy.get('#search-input').type('Harry').wait(500).get('#results-section').should('contain', 'Harry');
    })

    it('CT08 - Suporte à rolagem infinita', () => {
        cy.preencherEBuscar("Jurassic Park")
        cy.get('#results-section h3').should('have.length.at.least', 10)
    })
})