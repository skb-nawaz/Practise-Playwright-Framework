import { test, expect } from "../fixtures/hooks-fixtures";
import testData from "../data/login-module-data.json";

test.use({
  storageState: {
    cookies: [],
    origins: [],
  },
});

test.describe(
  "user cannot login with Invalid credentials",
  {
    tag: ["@InvalidLogin"],
    annotation: {
      type: "Story link",
      description: "add story link here",
    },
  },
  () => {
    test(
      "[Login] Verify User cannot enter with Invalid Passowrd and right username",
      {
        tag: ["@DEV"],
        annotation: {
          type: "Test case link",
          description: "https://www.google.com",
        },
      },
      async ({ page, loginPageFixture, commonutilsFixture }) => {
        const dec_username = commonutilsFixture.decryptData(
          process.env.SAUCE_USERNAME!,
        );
        await loginPageFixture.sauceDemoGoto();
        await loginPageFixture.sauceDemoLogin(
          dec_username,
          testData.worngPasswordData.password,
        );
        await expect(loginPageFixture.loginErrorLocator).toHaveText(
          testData.worngPasswordData.InvalidInput,
        );
        await expect(loginPageFixture.userNameInput).toBeVisible();
        //Epic sadface: Username and password do not match any user in this service
      },
    );

    test("[Login] Verify User cannot enter with Invalid username and right passowrd", async ({
      page,
      loginPageFixture,
      commonutilsFixture,
    }) => {
      const dec_password = commonutilsFixture.decryptData(
        process.env.SAUCE_PASSWORD!,
      );
      await loginPageFixture.sauceDemoGoto();
      await loginPageFixture.sauceDemoLogin(
        testData.wrongUserNameData.userName,
        dec_password,
      );
      await expect(loginPageFixture.loginErrorLocator).toHaveText(
        testData.wrongUserNameData.InvalidInput,
      );
      await expect(loginPageFixture.userNameInput).toBeVisible();
      //Epic sadface: Username and password do not match any user in this service
    });

    test("[Login] Verify User cannot enter with Invalid username and Invalid passowrd", async ({
      page,
      loginPageFixture,
      commonutilsFixture,
    }) => {
      await loginPageFixture.sauceDemoGoto();
      await loginPageFixture.sauceDemoLogin(
        testData.wrongUserNameAndPassword.userName,
        testData.wrongUserNameAndPassword.password,
      );
      await expect(loginPageFixture.loginErrorLocator).toHaveText(
        testData.wrongUserNameData.InvalidInput,
      );
      await expect(loginPageFixture.userNameInput).toBeVisible();
      //Epic sadface: Username and password do not match any user in this service
    });
  },
);

test(
  "[Login] Verify User cannot enter with valid username and passowrd",
  {
    tag: ["@UI", "@VISUAL"],
    annotation: {
      type: "story",
      description: "add link",
    },
  },
  async ({
    page,
    loginPageFixture,
    commonutilsFixture,
    dashBoardPageFixture,
  }) => {
    const dec_userName = commonutilsFixture.decryptData(
      process.env.SAUCE_USERNAME!,
    );
    const dec_password = commonutilsFixture.decryptData(
      process.env.SAUCE_PASSWORD!,
    );
    await loginPageFixture.sauceDemoGoto();
    await loginPageFixture.sauceDemoLogin(dec_userName, dec_password);
    await page.waitForTimeout(3000);
    await expect(dashBoardPageFixture.productTestLocator).toHaveScreenshot(
      "Products-chromium-linux.png",
    );
    await expect(dashBoardPageFixture.allProducts).toHaveScreenshot(
      "allProductsGrid-chromium-linux.png",
    );
    //Epic sadface: Username and password do not match any user in this service
  },
);
