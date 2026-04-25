import { HomePage } from "../page-objects/HomePage";
import { LoginPage } from "../page-objects/LoginPage";
import { AppointmentPage } from "../page-objects/AppointmentPage";

describe("Katalon", () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it("Scenario 1", () => {
    HomePage.makeAppointmentButton.click();

    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("12345678");
    LoginPage.loginButton.click();

    AppointmentPage.facilityDropdown.select("Seoul CURA Healthcare Center");
    AppointmentPage.hospitalReadmissionCheckbox.check();
    AppointmentPage.medicaidRadio.check();
    AppointmentPage.visitDateField.click();
    AppointmentPage.datePickerDays.contains("30").click();
    AppointmentPage.commentField.clear().type("CURA Healthcare Service");
    AppointmentPage.bookAppointmentButton.click();

    cy.contains("Seoul CURA Healthcare Center").should("be.visible");
    cy.contains("Yes").should("be.visible");
    cy.contains("Medicaid").should("be.visible");
    cy.contains("30").should("be.visible");
    cy.contains("CURA Healthcare Service").should("be.visible");
  });

  it("Scenario 2", () => {
    HomePage.makeAppointmentButton.click();

    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("12345678");
    LoginPage.loginButton.click();

    AppointmentPage.menuToggle.click();
    AppointmentPage.sidebarWrapper.should("have.class", "active");

    AppointmentPage.historyLink.click();
    AppointmentPage.noAppointmentMessage.should("be.visible");
  });
});