import { Ng5Page } from './app.po';

describe('ng5 App', () => {
  let page: Ng5Page;

  beforeEach(() => {
    page = new Ng5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
