describe('AscSac', () => {

  it('Entrar na plataforma e realizar cadastro', () =>{
    
    // Visitar site
      cy.visit('http://sacnew.ascbrazil.com.br')
      //Preenchendo o campo de login
      cy.get('[id="login-user"]').type('user_qa')
      //Preenchendo o campo de senha
      cy.get('[id="login-password"]').type('ascQA2022{enter}')

      
      //Cliancando em agentes
      cy.get('#side_agentes > .dropdown-toggle').click({force: true})
      //Cliancando em notificar agentes
      cy.get('#side_agente_notificacoes > a').click({force: true})

      //NOVO CADASTRO
      cy.get('.btn-to-success').click({force: true})
      //Digitando
      cy.get('#nom_msg').type('Novo cadastro{enter}')

      //VERIFICANDO SE FOI SALVO
      cy.get('#tblBody > :nth-child(1) > :nth-child(3)').should('have.text', 'Novo cadastro')

  });

});