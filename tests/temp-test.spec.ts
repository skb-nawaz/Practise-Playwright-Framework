import { expect } from "@playwright/test";
import { test } from "../fixtures/hooks-fixtures";

test("sauce demo login", async ({ page, gotoUrlFixture, logoutFixture }) => {
  // await loginPageFixture.sauceDemoLogin(dec_userName, dec_password);

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("test 2", async ({ page, gotoUrlFixture, logoutFixture }) => {
  // await loginPageFixture.sauceDemoLogin(dec_userName, dec_password);

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("test 3", async ({ page, gotoUrlFixture, logoutFixture }) => {
  // await loginPageFixture.sauceDemoLogin(dec_userName, dec_password);

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

/* test.beforeEach(
  "Before each hook to navigate inventory page",
  async ({ loginPageFixture }) => {
    await loginPageFixture.sauceDemoLogedin();
  },
);

test.afterEach(
  "After each hook to logout page",
  async ({ page, sideMenuPageFixture }) => {
    await sideMenuPageFixture.clickOnLogOutBtn();
    await page.waitForTimeout(1500);
  },
); */

/*   const dec_userName = commonutilsFixture.decryptData(
    process.env.SAUCE_USERNAME!,
  );
  const dec_password = commonutilsFixture.decryptData(
    process.env.SAUCE_PASSWORD!,
  ); */

/*   const enc_username = commonutils.encryptData(process.env.SAUCE_USERNAME!);
  console.log("enc_username", enc_username);
  const enc_password = commonutils.encryptData(process.env.SAUCE_PASSWORD!);
  console.log("enc_password", enc_password); */
