import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/');
  await page.getByRole('link', { name: 'Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Trigger an Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Trigger a Confirmation' }).click();
});