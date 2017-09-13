import { NgDynamicRoutingPage } from './app.po';

describe('ng-dynamic-routing App', () => {
  let page: NgDynamicRoutingPage;

  beforeEach(() => {
    page = new NgDynamicRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
