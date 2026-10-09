describe('new plan', () => {
  it('debe crear plan', () => {
    cy.visit('/plans/new');
    cy.get('input[name="name"]').type('Plan de prueba');
    cy.get('input[name="address"]').type('Calle de prueba 123');
    cy.get('input[name="estimatedPrice"]').type('100');
    cy.get('input[name="estimatedTime"]').type('60');
    cy.get('textarea[name="description"]').type('Descripción de prueba');
    cy.get('textarea[name="recomendations"]').type('Recomendaciones de prueba');
    cy.get('input[name="image"]').type('https://via.placeholder.com/150');
    cy.get('button[type="submit"]').click();
  });
});

describe ('plan fail to create', () => {
  it('debe fallar al crear plan', () => {
    cy.visit('/plans/new');
    cy.get('input[name="name"]').type('Plan de prueba');
    cy.get('input[name="address"]').type('Calle de prueba 123');
    cy.get('input[name="estimatedPrice"]').type('100');
    cy.get('input[name="estimatedTime"]').type('60');
    cy.get('textarea[name="description"]').type('Descripción de prueba');
    cy.get('textarea[name="recomendations"]').type('Recomendaciones de prueba');
    cy.get('button[type="submit"]').click();
  });
});