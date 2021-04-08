import { by, element } from 'protractor';

export class LoginPage {

    private inputUser = element(by.id('idUser'));
    private inputPassword = element(by.id('idPassword'));
    private linkButtonLogin = element(by.css('button.buttonLogin'));

    async enterUser(idUser) {
        await this.inputUser.sendKeys(idUser);
    }

    async enterPassword(idPassword) {
        await this.inputPassword.sendKeys(idPassword);
    }

    async clickBotonLogin() {
      await this.linkButtonLogin.click();
    }

    // async contarProductos() {
    //     return this.listaProductos.count();
    // }
}
