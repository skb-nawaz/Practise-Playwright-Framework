import { test as baseTest } from "./pomFixtures";
import { CommonUtils } from "../utilities/common-utils";

type commonUtilsFixturesType = {
  commonutilsFixture: CommonUtils;
};

export const test = baseTest.extend<commonUtilsFixturesType>({
  commonutilsFixture: async ({ page }, use) => {
    await use(new CommonUtils());
  },
});

export { expect } from "@playwright/test";
