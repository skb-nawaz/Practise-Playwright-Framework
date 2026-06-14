import type { Locator, Page } from "@playwright/test";

export class ItemsPage {
  readonly page: Page;
  readonly sauceBackPackName: Locator;
  readonly sauceBackPackAddtoCart: Locator;
  readonly cartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sauceBackPackName = page.locator('[data-test="item-4-title-link"]');
    this.sauceBackPackAddtoCart = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.cartBtn = page.locator('[data-test="shopping-cart-link"]');
  }

  async addSauceBackPack() {
    const productName = this.sauceBackPackName.textContent();
    await this.sauceBackPackAddtoCart.click();
    return productName;
  }
  async gotoCart() {
    await this.cartBtn.click();
  }
}
