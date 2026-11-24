import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page } from '@playwright/test';
import { JuiceShopPage } from '../page-objects/juice-shop.page';

export class PlaywrightWorld extends World {
  browser!: Browser;
  page!: Page;
  applicationUrl!: string;
  juiceShopPage!: JuiceShopPage;
}

setWorldConstructor(PlaywrightWorld);
