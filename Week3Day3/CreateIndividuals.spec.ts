import test from "@playwright/test"

test("Create Individuals", async({page})=>{

    //Login into Salesforce Allpication and Create an Individual
    await page.goto("https://login.salesforce.com")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(8000)
    await page.locator("//div/span[contains(text(),'App Launcher')]").click()
    await page.waitForTimeout(8000)
    await page.locator("//button[text()='View All']").click()
    await page.waitForTimeout(2000)
    await page.locator("//span/p[text()='Individuals']").click()
    await page.locator("//span[text()='Individuals List']").click()
    await page.locator("//span[text()='New Individual']").click()
    await page.waitForTimeout(2000)
    await page.locator("//input[contains(@class,'lastName com')]").fill("Saranya")
    await page.locator("//span[text()='Save']").click()





})
