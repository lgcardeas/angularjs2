export class LuisTestAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('luis-test-angular-app h1')).getText();
  }
}
