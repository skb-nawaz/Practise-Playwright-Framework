import { test } from "../fixtures/common-fixture";
import { expect } from "@playwright/test";

test("global setup for auto login", async ({
  page,
  loginPageFixture,
  commonUtilsFixture,
  dashBoardFixture,
}) => {
  const userName = commonUtilsFixture.encryptData("orangehrm_skbn");
  const password = commonUtilsFixture.encryptData("184G1a0126@");

  const dec_userName_data = commonUtilsFixture.decryptData(userName);

  const dec_password_data = commonUtilsFixture.decryptData(password);

  await loginPageFixture.gotoOrangeHrm();

  await loginPageFixture.loginOrangeHrm(dec_userName_data, dec_password_data);

  await expect(dashBoardFixture.dashBoardText).toBeVisible({
    timeout: 120000,
  });

  await page.context().storageState({
    path: "./PlaywrightAuthFile/.auth/auth.json",
  });
});
