// import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { LoginPage } from '../page/login/login.po';
import { ShipmentsPage } from '../page/shipments/shipments.po';

describe('workspace-project status', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let shipments: ShipmentsPage;
    let login: LoginPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        shipments = new ShipmentsPage();
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

        navBar.clickBotonShipment();
        shipments.clickButtonListShipments();

        // expect(1).toBe(status.contarStatus());
    });

    it('Deberia crear un estado', () => {
      const ORIGIN_ADDRESS = 'CL1A # 55-64 Medellin';
      const DESTINATION_ADDRESS = 'CRA 4 # 62-29 Cartagena';
      const NOTE = 'Carga delicada';
      const DESCRIPCION = 'Portatil DEL';
      const WEIGHT = '4';

      navBar.clickBotonShipment();

      shipments.enterInputOriginAddress(ORIGIN_ADDRESS);
      shipments.enterInputDestinationAddress(DESTINATION_ADDRESS);
      shipments.enterInputNote(NOTE);
      shipments.enterInputDescripcion(DESCRIPCION);
      shipments.enterInputWeight(WEIGHT);

      navBar.clickBotonLogout();
  });
});
