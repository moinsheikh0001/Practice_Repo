import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { PlaywrightWorld } from './world';

setDefaultTimeout(60_000);

Before(async function (this: PlaywrightWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.page = await this.browser.newPage();
});

After(async function (this: PlaywrightWorld) {
  await this.page?.close();
  await this.browser?.close();
});
