import { JunoAngPage } from './app.po';

describe('juno-ang App', () => {
  let page: JunoAngPage;

  beforeEach(() => {
    page = new JunoAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
