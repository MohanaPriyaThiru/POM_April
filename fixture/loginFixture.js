import { test as base } from "@playwright/test";
import { LoginPage } from "../page/loginpage";
import data from "../test_data/data.json";

export const testFixture = base.extend({
  loginfixture: async ({ page }, use) => {
    const loginobj = new LoginPage(page);
    await loginobj.navigate(data.url);
    await loginobj.loginfunction(data.userName, data.password);
    await use(page);
  },
});
