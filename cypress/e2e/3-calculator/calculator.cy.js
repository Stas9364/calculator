describe('Calc E2E', () => {
	it('should press button and get result 3', () => {
		cy.visit('/');

		cy.get('#three').click();
		cy.get('#divide').click();
		cy.get('#three').click();
		cy.get('#plus').click();
		cy.get('#two').click();
		cy.get('#equal').click();
		cy.get('h1').last().should('have.text', '3')

	});

	it('should change theme to Dark', () => {
		cy.get('select').last().select('Dark');
	});

	it('should hide history', () => {
		cy.get('img').click();
	});

	it('should clear output', () => {
		cy.get('#clear').click();
	});

	it('should tap to link and go to class component', () => {
		cy.get('a').last().click();
	});

	it('should change theme to Light', () => {
		cy.get('select').select('Light');
	});

	it('should show history', () => {
		cy.get('img').click();
	});

	it('should get result equal 8', () => {
		cy.get('#bracketLeft').click();
		cy.get('#two').click();
		cy.get('#plus').click();
		cy.get('#two').click();
		cy.get('#bracketRight').click();
		cy.get('#multiply').click();
		cy.get('#two').click();
		cy.get('#equal').click();
	});
});
