import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dns-ssl.online/encounter/');
  await page.getByRole('button', { name: 'Create Encounter' }).click();
  await page.getByPlaceholder('Search by MRN, Patient Name,').click();
  await page.getByPlaceholder('Search by MRN, Patient Name,').fill('2356');
  await page.locator('#simple-popover').getByRole('button', { name: 'Add New Patient' }).click();
  await page.getByPlaceholder('Enter Last Name').click();
  await page.getByPlaceholder('Enter Last Name').fill('John');
  await page.getByPlaceholder('Enter First Name').click();
  await page.getByPlaceholder('Enter First Name').fill('miller');
  await page.getByPlaceholder('Enter MRN').click();
  await page.getByPlaceholder('Enter MRN').fill('MRN234567');
  await page.getByLabel('Select gender').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByLabel('Choose date').click();
  await page.getByLabel('calendar view is open, switch').click();
  await page.getByRole('radio', { name: '1997' }).click();
  await page.getByRole('row', { name: '3 4 5 6 7 8' }).click();
  await page.getByText('Age27').click();
  await page.getByPlaceholder('Phone Number').click();
  await page.getByPlaceholder('Phone Number').fill('9998889998');
  await page.getByPlaceholder('Enter ZIP code').click();
  await page.getByPlaceholder('Enter ZIP code').fill('500084');
  await page.getByPlaceholder('Start typing address...').click();
  await page.getByPlaceholder('Start typing address...').fill('California');
  await page.getByPlaceholder('Enter City').click();
  await page.getByPlaceholder('Enter City').fill('California');
  await page.getByPlaceholder('Enter State').click({
    modifiers: ['Shift']
  });
  await page.getByPlaceholder('Enter State').click();
  await page.getByPlaceholder('Enter State').fill('Washington');
  await page.getByText('Select patient type').click();
  await page.getByRole('option', { name: 'In-patient' }).click();
  await page.getByPlaceholder('Enter visit number').click();
  await page.getByPlaceholder('Enter visit number').fill('2');
  await page.getByText('Select visit type').click();
  await page.getByRole('option', { name: 'Call Back' }).click();
});