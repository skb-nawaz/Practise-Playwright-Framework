import { expect, test } from "../fixtures/hooks-fixtures";

test(
  "Sauce back pack item add to card and verify",
  {
    tag: ["@UAT", "@DEMO"],
    annotation: {
      type: "Test case link",
      description: "https://www.playwrightdev.com",
    },
  },
  async ({
    page,
    gotoUrlFixture,
    loginPageFixture,
    itemsPageFixture,
    checkoutPageFixture,
  }) => {
    let productName;
    await test.step("add to cart sauce Back pack and return it's name", async () => {
      productName = await itemsPageFixture.addSauceBackPack();
    });
    //console.log("this product Name is :", productName);
    await test.step("Open cart page", async () => {
      await itemsPageFixture.gotoCart();
    });

    await test.step("verify added element present in the cart", async () => {
      const present = await checkoutPageFixture.verifyElementPresentInCart(
        productName!,
      );
      if (present) {
        expect(present).toBeTruthy();
      } else {
        expect(present).toBeTruthy();
      }
    });
  },
);
