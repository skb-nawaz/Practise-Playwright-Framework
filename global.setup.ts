import { test } from "./fixtures/hooks-fixtures";

test("global setup for auto login to SauceDemo", async ({
  page,
  loginPageFixture,
  commonutilsFixture,
}) => {
  const userName = commonutilsFixture.decryptData(process.env.SAUCE_USERNAME!);
  const password = commonutilsFixture.decryptData(process.env.SAUCE_PASSWORD!);

  await loginPageFixture.sauceDemoGoto();
  await loginPageFixture.sauceDemoLogin(userName, password);

  await page.waitForURL("**/inventory.html");

  await page.context().storageState({
    path: "./PlaywrightAuthFile/.auth/auth.json",
  });
});
