import test from "@playwright/test"

test("Edit Individuals", async({page})=>{

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
    await page.locator("//span[text()='Individuals']").click()
    await page.locator("[name='Individual-search-input']").fill("Saranya")
    await page.keyboard.press('Enter')
    await page.locator("(//span[text()='Show Actions'])[1]").click()
    await page.locator("//a/div[text()='Edit']").click()
    await page.locator("(//a[text()='--None--'])[1]").click()
    await page.locator("//a[text()='Mrs.']").click()
    await page.locator("[class='firstName compoundBorderBottom form-element__row input']").fill("S")
    await page.locator("//span[text()='Save']").click()




})