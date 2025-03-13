describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks swapping slides', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.wait(2000);
    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks all slides', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Responsive Test', function () {
  const devices = [
    { name: 'Macbook 13', width: 1280, height: 800 },
    { name: 'iPad', width: 768, height: 1024 },
    { name: 'iPhone X', width: 375, height: 812 }
  ];

  devices.forEach(device => {
    it(`Checks gallery layout on ${device.name}`, function () {
      cy.viewport(device.width, device.height);
      cy.visit('http://localhost:3000');
      cy.get('.swiper-wrapper').should('be.visible');
      cy.get('.swiper-slide').should('have.length.at.least', 3);
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.get('.swiper-button-prev').should('be.visible').click();
    });
  });
});

describe('Swiper Gallery Visibility Test', function () {
  it('Checks if gallery elements are visible', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-wrapper').should('be.visible');
    cy.get('.swiper-slide').should('have.length.at.least', 3);
    cy.wait(2000);
    cy.get('.swiper-button-next').should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-button-prev').should('be.visible').click({ force: true });
  });
});
