import { by, element } from 'protractor';

export class ShipmentsPage {
    private linkListShipmentsList = element(by.id('linkListShipmentsList'));
    private linkLinkShipmentsCreate = element(by.id('linkLinkShipmentsCreate'));

    private inputOriginAddress = element(by.id('idOriginAddress'));
    private inputDestinationAddress = element(by.id('idDestinationAddress'));
    private inputIdNote = element(by.id('idNote'));
    private inputDescripcion = element(by.id('idDescripcion'));
    private inputWeight = element(by.id('idWeight'));

    private buttonCreateShipments = element(by.id('buttonshipmentsCreate'));
    private listStatus = element.all(by.css('tbody.shipments tr'));


    async clickButtonCreateShipments() {
        await this.linkLinkShipmentsCreate.click();
    }

    async clickButtonListShipments() {
        await this.linkListShipmentsList.click();
    }

    async enterInputOriginAddress(originAddress) {
        await this.inputOriginAddress.sendKeys(originAddress);
    }

    async enterInputDestinationAddress(destinationAddress) {
      await this.inputDestinationAddress.sendKeys(destinationAddress);
    }

    async enterInputNote(inputNote) {
      await this.inputIdNote.sendKeys(inputNote);
    }

    async enterInputDescripcion(inputDescripcion) {
      await this.inputDescripcion.sendKeys(inputDescripcion);
    }

    async enterInputWeight(inputWeight) {
      await this.inputWeight.sendKeys(inputWeight);
    }

    async clickButtonCreate() {
      await this.buttonCreateShipments.click();
    }

    async contarStatus() {
      return this.listStatus.count();
    }
}
