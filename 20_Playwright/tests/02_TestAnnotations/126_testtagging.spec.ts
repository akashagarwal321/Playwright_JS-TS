import { test, expect } from '@playwright/test';

test('login test @smoke', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('cart test @regression', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('checkout test @smoke @regression', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});


//to run -- npx playwright --grep @smoke
//to run -- npx playwright --grep @regression
//to run -- npx playwright --grep-invert @smoke -- exclude smoke