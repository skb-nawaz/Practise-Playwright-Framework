import type { Locator, Page } from "@playwright/test";

export class SideMenuPage {
  readonly page: Page;
  readonly sideMenuBtnLocator: Locator;
  readonly logoutBtnLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sideMenuBtnLocator = page.getByRole("button", { name: "Open Menu" });
    this.logoutBtnLocator = page.locator('[data-test="logout-sidebar-link"]');
  }

  async clickOnLogOutBtn() {
    await this.sideMenuBtnLocator.click();
    await this.logoutBtnLocator.click();
  }
}
