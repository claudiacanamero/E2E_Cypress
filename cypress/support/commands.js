// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// commands.js

Cypress.Commands.add('searchAndAddProduct', (productName, urlProductName, numberofClicks, productNumber) => {
  // Implementar lógica para buscar un producto y añadirlo al carrito
  cy.get('.name').contains(productName).click();
  cy.url().should('include', urlProductName);
  cy.wait(1500);
  // Añadir al carrito
  cy.contains('Add to Basket').click();
  cy.wait(1500);
  cy.get('.name').should('contain', productName);
  cy.get('.qty-inp-s').should('have.value', '1');
  cy.wait(2000);
  // Ir a la pagina de comprar
  cy.contains('Go to cart').click();
  cy.url().should('include', '/shopping-cart');
  cy.wait(1500);
  // Actualizar la cantidad
  for (let i = 0; i < numberofClicks; i++) {
      cy.get('.bigger').click();
    }
  cy.get('.qty-inp-s').should('have.value', productNumber);
  cy.wait(1500);
  // Implementar lógica para proceder al pago y completar la compra
  // Ir a la página final de pago
  cy.contains('Pay with card').click();
  // Verificar que se ha llegado correctamente
  cy.url().should('include', '/checkout');
  cy.wait(1500);
});

Cypress.Commands.add('shippgingAdress', (usuario) => {
  // Rellenar y verificar campos de direccion de compra
  // First Name
  cy.get('#shipping_address-firstname').type(usuario.firstName);
  cy.get('#shipping_address-firstname').should('have.value', usuario.firstName);
  // Last Name
  cy.get('#shipping_address-lastname').type(usuario.lastName);
  cy.get('#shipping_address-lastname').should('have.value', usuario.lastName);
  // Street Adress
  cy.get('#shipping_address-street_address').type(usuario.streetAdress);
  cy.get('#shipping_address-street_address').should('have.value', usuario.streetAdress);
  // Post Code
  cy.get('#shipping_address-postcode').type(usuario.postCode);
  cy.get('#shipping_address-postcode').should('have.value', usuario.postCode);
  // Town/City
  cy.get('#shipping_address-city').type(usuario.city);
  cy.get('#shipping_address-city').should('have.value', usuario.city);
  // Country
  cy.get('#s2id_shipping_address-country').click();
  cy.get('.select2-results').contains(usuario.country).click();
  // Coontact Information: e-mail adress
  cy.get('#checkout-email_address').type(usuario.emailAddress);
  cy.get('#checkout-email_address').should('have.value', usuario.emailAddress);
  cy.wait(1500);
});

Cypress.Commands.add('checkout', (finalMessage) => { 
  // Seleccionar método de pago "Cash on delivery" y confirmar condiciones
  cy.get('input[type="radio"][name="payment"][value="cod"]').click();
  // Verificar que se ha pulsado correctamente
  cy.get('input[type="radio"][name="payment"][value="cod"]').should('be.checked');
  cy.wait(1500);
  // Aceptar terminos y condiciones
  cy.get('#checkout-terms').then(($checkbox) => {
      if (!$checkbox.is(':checked')) {
          cy.get('#checkout-terms').click();
      }
  });
  cy.get('#checkout-terms').should('be.checked');
  cy.wait(1500);
  // Completar el pago
  cy.get('.btn-title').contains('Confirm and pay').click();
  cy.wait(1500);
  // Verificar que se muestra el mensaje correcto después del pago
  cy.get('.text-2').contains(finalMessage).should('exist');
});
