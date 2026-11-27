import { chromium,Browser,BrowserContext,Page } from "playwright";
  
  async function main():Promise<void>{
  const browser:Browser = await chromium.launch({headless:false});
  const context:BrowserContext = await browser.newContext();
  const page:Page = await context.newPage();

  await page.goto("https://www.linkedin.com");

  await page.close();
  await context.close();
  await browser.close();
  //(await page).close();

  }

  main()