import type { Locator, Page, expect } from "@playwright/test";

export class CheckOutPage {
  readonly page: Page;
  readonly allCartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allCartItems = page.locator(".inventory_item_name");
  }

  async verifyElementPresentInCart(productname: string) {
    const count = await this.allCartItems.count();

    for (let i = 0; i < count; i++) {
      const itemText = await this.allCartItems.nth(i).textContent();

      if (itemText?.trim() === productname) {
        return true;
      }
    }

    return false;
  }
}
