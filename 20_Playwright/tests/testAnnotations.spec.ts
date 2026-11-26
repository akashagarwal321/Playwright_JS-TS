import { test, expect } from '@playwright/test';


// Feature	            Purpose	                        Test executes?
// test.describe()	    Group tests	                    Yes, tests inside
// test.skip()	        Skip a test	                    No
// test.fixme()	        Mark a test as needing a fix	No
// test.fail()	        Expected failure	            Yes
// test.slow()	        Increase timeout	            Yes
// Tags	                Categorize/filter tests	        Yes, if selected
// test.only()	        Focus test execution	        Selected tests only
// test.step()	        Structure execution/reporting	Yes



test.describe("Google related testcases", async () => {

    test("Sample Test 1", async ({ page }) => {

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })

    test("Sample Test 2", async ({ page }) => {

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })

    test("Sample Test 3", async ({ page }) => {

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })

    test("Sample Test 4", async ({ page }) => {

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })

    test("Sample Test 5", async ({ page }) => {

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })

})


 test.skip("Sample Test 6", async ({ page }) => {

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })
