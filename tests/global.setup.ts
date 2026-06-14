import { test } from "../fixtures/commonUtilsFixtures";
import { expect } from "@playwright/test";

test("Global setup to store Authentication state", async ({
  page,
  loginPageFixture,
  dashBoardPageFixture,
  commonutilsFixture,
}) => {
  const username = commonutilsFixture.decryptData(process.env.SAUCE_USERNAME!);
  const password = commonutilsFixture.decryptData(process.env.SAUCE_PASSWORD!);
  await loginPageFixture.sauceDemoGoto();
  await loginPageFixture.sauceDemoLogin(username, password);
  await page.waitForURL("https://www.saucedemo.com/inventory.html");
  await expect(dashBoardPageFixture.productTestLocator).toHaveText("Products");
  await page.context().storageState({
    path: "./playwrightAuthFile/.auth/auth.json",
  });
});
