import { by, element } from 'protractor';

export class NavbarPage {

    linkListStatuList = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkListShipmentsList = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkLogout = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    linkTrm = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkShipmentSearch = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkLogin = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonStatus() {
      await this.linkListStatuList.click();
    }

    async clickBotonShipment() {
      await this.linkListShipmentsList.click();
    }

    async clickBotonLogout() {
      await this.linkLogout.click();
    }

    async clickBotonTrm() {
      await this.linkTrm.click();
    }

    async clickBotonShipmentSearch() {
      await this.linkShipmentSearch.click();
    }

    async clickLogin() {
      await this.linkLogin.click();
    }
}
