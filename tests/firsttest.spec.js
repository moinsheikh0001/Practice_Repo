import { test, expect } from '@playwright/test';

test.beforeEach('Login Before each', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     // Login to Orange.hrm
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole("Button", {type:"submit"}).click(); 
})

test('Validate open OrangeHRM website', async ({page}) => {
    
    // Validate New Page url
    await expect(page.getByAltText("client brand banner", { exact: true })).toBeVisible();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

})

test('validate admin',async ({page})=>{
    // Create admin user
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await expect(page.locator('#app')).toContainText('Add User');
    // await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
    // await page.getByRole('option', { name: 'Admin' }).click();
    const drop_d = await page
    await page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('HCLname1');
    await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('HCLuser');
    await page.getByRole('textbox').nth(2).press('Tab');
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('Hclpass');
    await page.getByRole('textbox').nth(3).press('Tab');
    await page.getByRole('textbox').nth(4).fill('HclPass');
    await page.getByRole('button', { name: 'Save' }).click();
        
})

// test('create admin user', async ({page}) => {
//     await page.getByRole("navigation", { name: "Sidepanel", exact: true }).getByText("Admin", { exact: true }).click();
// })