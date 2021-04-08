import { by, element } from 'protractor';

export class StatusPage {
    private linkListStatuList = element(by.id('linkListStatuList'));
    private linkLinkStatuCreate = element(by.id('linkLinkStatuCreate'));
    private inputStatusName = element(by.id('idStatusName'));
    private buttonCreateStatus = element(by.id('buttonStatusCreate'));
    private listStatus = element.all(by.css('tbody.staus tr'));


    async clickButtonCreateStatus() {
        await this.linkLinkStatuCreate.click();
    }

    async clickButtonListStatus() {
        await this.linkListStatuList.click();
    }

    async enterInputStatusName(nameStatus) {
        await this.inputStatusName.sendKeys(nameStatus);
    }

    async clickButtonCreate() {
      await this.buttonCreateStatus.click();
    }

    async contarStatus() {
      return this.listStatus.count();
    }
}
