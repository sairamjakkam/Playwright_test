
import { chromium, test } from '@playwright/test'

test("browser launch", async () => {

    const browser = await chromium.launch({

        headless:false
    })

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://dns-ssl.online/encounter/')

    await page.locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[1]").click();

    await page.fill("//input[@aria-invalid='false']","45667");

    await page.waitForTimeout(3000);

    

})
