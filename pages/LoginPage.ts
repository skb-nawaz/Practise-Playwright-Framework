import type { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly loginErrorLocator: Locator;

  /**
   *
   * @param page
   * @param userNameInput
   * @param passwordInput
   * @param loginBtn
   * @param loginErrorLocator
   */
  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.loginErrorLocator = page.locator('[data-test="error"]');
  }

  /***
   * Method go launch sauceDemo in browser
   */
  async sauceDemoGoto() {
    await this.page.goto(process.env.BASEURL!);
  }

  async sauceDemoLogedin() {
    await this.page.goto(`${process.env.BASEURL!}inventory.html`);
  }
  /***
   *Method to login sauceDemo
   @param username
   @param password
   */
  async sauceDemoLogin(username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}
