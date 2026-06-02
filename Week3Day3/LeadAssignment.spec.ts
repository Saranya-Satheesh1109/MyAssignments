import test from "@playwright/test"

test("Create Lead Salesforce", async({page})=>{

    //Log into Salesforce Application and create a Lead
    await page.goto("https://login.salesforce.com")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(8000)
    await page.locator("//div/span[contains(text(),'App Launcher')]").click()
    await page.waitForTimeout(8000)
    await page.locator("//button[text()='View All']").click()
    await page.waitForTimeout(2000)
    await page.locator("//span/p[text()='Leads']").click()
    await page.locator("//a/div[text()='New']").click()
    await page.locator("(//button/span[text()='--None--'])[1]").click()
    await page.locator("//span[text()='Mrs.']").click()
    await page.waitForTimeout(3000)
    await page.locator("[name='firstName']").fill("Saranya")
    await page.locator("[name='lastName']").fill("Satheesh")
    await page.locator("[name='Company']").fill("Learning Academy")
    await page.locator("[name='SaveEdit']").click()
   



})
