import test from "@playwright/test"

test("Salesforce Login Assignment", async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.waitForTimeout(5000)
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[contains(@id,'pass')]").fill("TestLeaf@2025")
    await page.locator("(//input[contains(@name,'ogi')])[4]").click()



})