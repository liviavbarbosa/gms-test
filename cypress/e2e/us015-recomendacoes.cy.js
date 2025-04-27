/// <reference types="cypress"/>

describe('US015 - Funcionalidade: Recomendações', () => {
    beforeEach(() => {
      cy.visit('/')
    });
  
    it('CT01 - Exibição das recomendações do dia', () => {
        cy.get('#recommendations-section p').should('exist')
        cy.get('#recommendations-section img').should('exist')
        cy.get('#recommendations-section').should('contain', 'Sinopse')
    })

    it('CT03 - Verificação da quantidade de recomendações', () => {
        cy.get('#recommendations-section p').should('have.length.at.least', 4).should('have.length.lessThan', 6)
    })
})