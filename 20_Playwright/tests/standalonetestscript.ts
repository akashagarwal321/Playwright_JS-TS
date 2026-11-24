import { chromium } from "@playwright/test";
  
  async function main():Promise<void>{
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.linkedin.com");

  await page.close();
  await context.close();
  await browser.close();
  //(await page).close();

  }

  main()