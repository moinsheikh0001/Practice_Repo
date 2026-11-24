import { strict as assert } from 'node:assert';
import { Given, Then, When } from '@cucumber/cucumber';
import { JuiceShopPage } from '../page-objects/juice-shop.page';
import { PlaywrightWorld } from '../support/world';

Given(
  'the application URL is {string}',
  function (this: PlaywrightWorld, url: string) {
    this.applicationUrl = url;
  },
);

When(
  'I open the OWASP Juice Shop application',
  async function (this: PlaywrightWorld) {
    this.juiceShopPage = new JuiceShopPage(this.page);
    await this.juiceShopPage.open(this.applicationUrl);
  },
);

Then(
  'the page title should contain {string}',
  async function (this: PlaywrightWorld, expectedTitle: string) {
    const title = await this.juiceShopPage.title();
    assert.ok(
      title.includes(expectedTitle),
      `Expected page title "${title}" to contain "${expectedTitle}"`,
    );
  },
);

Then(
  'the application URL should be {string}',
  function (this: PlaywrightWorld, expectedUrl: string) {
    assert.equal(this.juiceShopPage.currentUrl(), expectedUrl);
  },
);
