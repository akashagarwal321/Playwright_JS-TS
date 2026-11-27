import {test, expect, chromium} from "@playwright/test";


test("understanding browser heirarchy", async()=>{


    //launch browser
    const browser = await chromium.launch({headless:false});

    //Create two isolated contexts
    const contextA = await browser.newContext();
    const contextB = await browser.newContext();

    //Create Pages
    const pageA = await contextA.newPage();
    const pageB = await contextB.newPage();

    //Navigate Both Pages
    await pageA.goto("https://www.google.com");
    await pageB.goto("https://playwright.dev/");

    await expect(pageA).toHaveTitle("Google");
    await expect(pageB).toHaveTitle(/Playwright/);


})