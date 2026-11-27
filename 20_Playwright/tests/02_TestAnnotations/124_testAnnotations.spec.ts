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

test('mobile-only feature', async ({ page }) => {
  test.skip(
    !test.info().project.name.includes('mobile'),
    'This test is intended for mobile'
  );

  await page.goto('https://example.com');
});


 test.fixme("Sample Test 7", async ({ page }) => {

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })    


    
 test.fail("Sample Test 8", async ({ page }) => {

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google - Akash/);
    })


    
 test("Sample Test 9", async ({ page }) => {

        test.slow()

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })   

//we can make slow based on conditions
// test('report generation', async ({ page }) => {
//   test.slow(process.env.ENVIRONMENT === 'staging');

//   await page.goto('https://example.com');
// });


    
 test.only("Sample Test 10", async ({ page }) => {

        test.slow()

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })

test.only("Sample Test 11", async ({ page }) => {

        test.slow()

        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle(/Google/);
    })




///*************************************************** */



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



