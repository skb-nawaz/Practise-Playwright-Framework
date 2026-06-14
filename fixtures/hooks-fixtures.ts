import { test as baseTest } from "../fixtures/commonUtilsFixtures";
import type { LoginPage } from "../pages/LoginPage";
import type { SideMenuPage } from "../pages/sideMenuPage";

type hookFixturesType = {
  gotoUrlFixture: any;
  logoutFixture: any;
};

export const test = baseTest.extend<hookFixturesType>({
  gotoUrlFixture: async (
    { loginPageFixture }: { loginPageFixture: LoginPage },
    use: (value?: any) => Promise<void>,
  ) => {
    await loginPageFixture.sauceDemoLogedin();
    await use();
  },

  logoutFixture: async (
    { sideMenuPageFixture }: { sideMenuPageFixture: SideMenuPage },
    use: (value?: any) => Promise<void>,
  ) => {
    await use();
    await sideMenuPageFixture.clickOnLogOutBtn();
  },
});

export { expect} from "../fixtures/commonUtilsFixtures";
