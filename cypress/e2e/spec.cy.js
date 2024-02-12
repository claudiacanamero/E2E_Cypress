/// <reference types="cypress" />
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe('Test Case 1 and 2', () => {
  it('should complete the Test 1 successfully', () => {
    // TEST 1
    // Visitar la página
    cy.visit('https://sqademosatp.net/watch/');
    cy.wait(1500);
    // Buscar producto y añadirlo al carrito 2 veces
    cy.searchAndAddProduct('Royal London 41003-03', '/chasy-royal-london-41003-03', '1', '2');
    // Rellenar campos entrega compra
    cy.fixture('usuarios').as('usuariosData');
    cy.get('@usuariosData').then((usuariosData) => {
    // Utiliza los datos de fixture para iniciar sesión, por ejemplo
    // Encuentra el usuario con ID 1
    const usuarioId1 = usuariosData.usuarios.find(usuario => usuario.id === 1);
    cy.shippgingAdress(usuarioId1);
    });
    // Finalizar compra
    cy.checkout("We've received your order");


    // TEST 2
    // Visitar la página
    cy.visit('https://sqademosatp.net/watch/');
    cy.wait(1500);
    // Buscar producto y añadirlo al carrito
    cy.searchAndAddProduct('Citizen Eco-Drive Silver Tone Men', '/citizen-eco-drive-silver-tone-men', '2', '3');
    // Finalizar compra
    // Seleccionar método de pago "Cash on delivery" y confirmar condiciones
    cy.get('input[type="radio"][name="payment"][value="cod"]').click();
    // Verificar que se ha pulsado correctamente
    cy.get('input[type="radio"][name="payment"][value="cod"]').should('be.checked');
    cy.wait(1500);
    // Completar el pago
    cy.get('.btn-title').contains('Confirm and pay').click();
    cy.wait(1500);
    // Verificar que se muestra el mensaje correcto después del pago
    cy.get('.text-2').contains("We've received your order").should('exist');
  });
});

describe('Test Case 3', () => {
  it('should complete the Test 3 successfully', () => {
    // Visitar la página
    cy.visit('https://sqademosatp.net/watch/');
    cy.wait(1500);
    // Buscar producto y añadirlo al carrito
    cy.searchAndAddProduct('Citizen Eco-Drive Silver Tone Men', '/citizen-eco-drive-silver-tone-men', '2', '3');
    // Rellenar campos entrega compra
    cy.fixture('usuarios').as('usuariosData');
    cy.get('@usuariosData').then((usuariosData) => {
    // Utiliza los datos de fixture para iniciar sesión, por ejemplo
    // Encuentra el usuario con ID 1
    const usuarioId1 = usuariosData.usuarios.find(usuario => usuario.id === 1);
    cy.shippgingAdress(usuarioId1);
    });
    cy.checkout('Your order has been proceed');  
  });
});