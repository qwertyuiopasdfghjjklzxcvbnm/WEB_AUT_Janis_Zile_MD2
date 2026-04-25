import { basePage } from "./basePage";

export class appointmentPage extends basePage {
  static get url() {
    return "/#appointment";
  }

  static get facilityDropdown() {
    return cy.get("#combo_facility");
  }

  static get hospitalReadmissionCheckbox() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get medicaidRadio() {
    return cy.get("#radio_program_medicaid");
  }

  static get visitDateField() {
    return cy.get("#txt_visit_date");
  }

  static get datePickerDays() {
    return cy.get(".datepicker-days .day:not(.old):not(.new)");
  }

  static get commentField() {
    return cy.get("#txt_comment");
  }

  static get bookAppointmentButton() {
    return cy.get("#btn-book-appointment");
  }

  static get menuToggle() {
    return cy.get("#menu-toggle");
  }

  static get sidebarWrapper() {
    return cy.get("#sidebar-wrapper");
  }

  static get historyLink() {
    return cy.contains(".sidebar-nav li a", "History");
  }

  static get noAppointmentMessage() {
    return cy.contains("No appointment.");
  }
}