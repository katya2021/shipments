// import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { StatusPage } from '../page/status/status.po';
import { LoginPage } from '../page/login/login.po';

describe('workspace-project status', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let status: StatusPage;
    let login: LoginPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        status = new StatusPage();
        login = new LoginPage();
    });

    it('Deberia listar los estados', () => {
        const USER = 'katya.alvear@ceiba.com.co';
        const PASSWORD = '123';

        page.navigateTo();
        navBar.clickLogin();
        login.enterUser(USER);
        login.enterPassword(PASSWORD);
        login.clickBotonLogin();

        navBar.clickBotonStatus();
        status.clickButtonListStatus();

        // expect(1).toBe(status.contarStatus());
    });

    it('Deberia crear un estado', () => {
      const NAME = 'katya.alvear@ceiba.com.co';

      navBar.clickBotonStatus();
      status.clickButtonCreateStatus();
      status.enterInputStatusName(NAME);
      status.clickButtonCreate();

      navBar.clickBotonLogout();
  });
});
