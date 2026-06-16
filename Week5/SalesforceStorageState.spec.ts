import test from "@playwright/test"

//Login into Salesforce application and storing the values using Storage state in a json file
test("Store SalesforceLogin credentials in Storage state", async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()

    await page.context().storageState({path:'Data/SF1_Login.json'})
    
})
