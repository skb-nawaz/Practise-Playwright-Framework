import type { Locator, Page } from "@playwright/test";

export class DashBoardPage {
  readonly page: Page;
  readonly productTestLocator: Locator;
  readonly allProducts: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTestLocator = page.locator('[data-test="title"]');
    this.allProducts = page.locator(".inventory_container");
  }
}
