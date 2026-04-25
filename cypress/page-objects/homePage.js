import { basePage } from "./basePage";

export class homePage extends basePage {
  static get url() {
    return "/#/";
  }

  static get makeAppointmentButton() {
    return cy.get("#btn-make-appointment");
  }
}