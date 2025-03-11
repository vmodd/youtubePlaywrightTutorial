import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.getByText('Login').click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('vlad');
  await page.getByRole('textbox', { name: 'Password' }).fill('penguin');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Warning:')).toBeVisible();
});