import { WangularProjectPage } from './app.po';

describe('Wangular-project App', () => {
  let page: WangularProjectPage;

  beforeEach(() => {
    page = new WangularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
