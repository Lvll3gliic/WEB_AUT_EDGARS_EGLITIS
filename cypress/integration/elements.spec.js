import practicePage from "../pageObjects/practicePage";

// Final task in Automation testing
context("Elements scenarions", () => {
  context("Automation practice form", () => {
    it("Form fillings", () => {
      practicePage.visit();
      practicePage.firstName.type('Edgars');
      practicePage.lastName.type('Eglītis');
      practicePage.email.type('edgars.eglitis@va.lv');
      practicePage.control.contains('Male').click();
      practicePage.number.type("123456789")
      practicePage.birthday.click();
      practicePage.year.select('1930');
      practicePage.month.select('February');
      practicePage.day.click({force:true});
      practicePage.subject.type('Economics' + "{enter}");
      practicePage.control.contains('Music').click();
      practicePage.img.selectFile('cypress/files/pic.jpg');
      practicePage.address.type('Random adrese 123');
      practicePage.state.type('NCR' + "{enter}");
      practicePage.city.type('Delhi' + "{enter}");
      practicePage.submitButton.click();
      practicePage.finalScreen
      .should("contain", 'Edgars')
      .should("contain", 'Eglītis')
      .should("contain", 'edgars.eglitis@va.lv')
      .should("contain", 'Male')
      .should("contain", '28 February,1930')
      .should("contain", '123456789')
      .should("contain", 'Economics')
      .should("contain", 'Music')
      .should("contain", 'Random adrese 123')
      .should("contain", 'NCR')
      .should("contain", 'Delhi')
      .should("contain", 'Edgars');
      practicePage.closeButton.click();
    });
  });
});