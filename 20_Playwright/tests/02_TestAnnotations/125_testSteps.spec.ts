import { test, expect } from '@playwright/test';

test('verify Example Domain', async ({ page }) => {

  await test.step('Navigate to website', async () => {
    await page.goto('https://example.com');
  });

  await test.step("Verify Title of page",async()=>{
    await expect(page).toHaveTitle("Example Domain")
  })

});