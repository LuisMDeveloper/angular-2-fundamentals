import { EggheadPage } from './app.po';

describe('egghead App', function() {
  let page: EggheadPage;

  beforeEach(() => {
    page = new EggheadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
