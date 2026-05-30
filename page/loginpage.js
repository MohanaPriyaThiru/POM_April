export class LoginPage {
  constructor(page) {
    this.page = page;
    this.logo = page.getByAltText("AdactIn Group", { exact: true });
    this.userName = page.locator("#username");
    this.password = page.locator("#password");
    this.button = page.locator("#login");
    this.forgetPasswordLink = page.getByText("Forgot Password?");
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async loginfunction(userName, password) {
    await this.logo.isVisible();
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.button.click();
  }

  async forgetPassword() {
    await this.forgetPasswordLink.click();
  }
}
