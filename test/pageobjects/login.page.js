/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

class LoginPage {
  get emailLabel() {
    return $('[data-testid="login-input-email"] label');
  }

  get passwordLabel() {
    return $('[data-testid="login-input-password"] label');
  }

  get emailInput() {
    return $('[data-testid="login-input-email"] input');
  }

  get passwordInput() {
    return $('[data-testid="login-input-password"] input');
  }

  get errorEmailInput() {
    return $('[data-testid="login-input-email"] p');
  }

  get errorPasswordInput() {
    return $('[data-testid="login-input-password"] p');
  }

  get errorLoginDenied() {
    return $('[data-testid="login-error-pop"] p');
  }

  get loginBtn() {
    return $('[data-testid="enter-login-btn"] button');
  }

  async loginForm(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
  }
  async loginBtnClick() {
    await this.loginBtn.click();
  }

  get emailError() {
    return $('[data-testid="login-input-email"] p');
  }

  get pswInput() {
    return $('[data-testid="login-input-password"] input');
  }

  get pswError() {
    return $('[data-testid="login-input-password"] p');
  }

  get enterBtn() {
    return $('[data-testid="enter-login-btn"] button');
  }

  get loginError() {
    return $('[data-testid="login-error-pop"]');
  }

  get loginErrorMsg() {
    return $('[data-testid="login-error-pop"] p');
  }

  get loader() {
    return $('[data-testid="classes-table-loader"]');
  }

  async login(username, password) {
    await this.emailInput.setValue(username);
    await this.pswInput.setValue(password);
    await this.enterBtn.click();
  }

  async emailErrorMsg(textContaining) {
    await expect(this.emailError).toBeDisplayed();
    expect(this.emailError).toHaveTextContaining(textContaining);
  }

  async pswErrorMsg(textContaining) {
    await expect(this.pswError).toBeDisplayed();
    expect(this.pswError).toHaveTextContaining(textContaining);
  }
}

module.exports = new LoginPage();
