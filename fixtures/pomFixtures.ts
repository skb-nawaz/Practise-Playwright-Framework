import { test as baseTest, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashBoardPage } from "../pages/DashBoardPage";
import { SideMenuPage } from "../pages/sideMenuPage";
import { ItemsPage } from "../pages/ItemsPage";
import { CheckOutPage } from "../pages/checkoutPage";

type pomFixturesType = {
  loginPageFixture: LoginPage;
  dashBoardPageFixture: DashBoardPage;
  sideMenuPageFixture: SideMenuPage;
  itemsPageFixture: ItemsPage;
  checkoutPageFixture: CheckOutPage;
};

export const test = baseTest.extend<pomFixturesType>({
  loginPageFixture: async ({ page }, use) => {
    // const loginpage = new LoginPage(page);
    await use(new LoginPage(page));
  },
  dashBoardPageFixture: async ({ page }, use) => {
    await use(new DashBoardPage(page));
  },
  sideMenuPageFixture: async ({ page }, use) => {
    await use(new SideMenuPage(page));
  },
  itemsPageFixture: async ({ page }, use) => {
    await use(new ItemsPage(page));
  },
  checkoutPageFixture: async ({ page }, use) => {
    await use(new CheckOutPage(page));
  },
});

// export expect
