// import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { LoginPage } from '../page/login/login.po';

describe('workspace-project login', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let login: LoginPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        login = new LoginPage();
    });

    it('Deberia iniciar session', () => {
        const USER = 'katya.alvear@ceiba.com.co';
        const PASSWORD = '123';

        page.navigateTo();
        navBar.clickLogin();
        login.enterUser(USER);
        login.enterPassword(PASSWORD);
        login.clickBotonLogin();

        // expect(page.getTitleText('app-reserva #tituloReserva')).toEqual('Reservas');
    });

    it('Deberia cerrar session', () => {
      page.navigateTo();
      navBar.clickBotonLogout();
  });

});
