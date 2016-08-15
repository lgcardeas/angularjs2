import { LuisTestAngularPage } from './app.po';

describe('luis-test-angular App', function() {
  let page: LuisTestAngularPage;

  beforeEach(() => {
    page = new LuisTestAngularPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('luis-test-angular works!');
  });
});
