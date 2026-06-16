import test,{expect} from "@playwright/test"

//Upload the file with type='file' attribute
test("File Upload Assignment", async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    //await page.waitForTimeout(8000)
    await page.locator("//div/span[contains(text(),'App Launcher')]").click()
    //await page.waitForTimeout(8000)
    await page.locator("//button[text()='View All']").click()
    await page.waitForTimeout(2000)
    await page.locator("//span/p[text()='Accounts']").click()
    //await page.waitForTimeout(2000)
    //Creating a new Account
    await page.getByTitle("New").first().click()
    //await page.waitForTimeout(2000)
    await page.locator("[name='Name']").fill("Saranya Satheesh")
    await page.locator("(//span[text()='--None--'])[1]").click()
    //await page.waitForTimeout(2000)
    await page.locator("//span[text()='Prospect']").click()
    await page.locator("(//span[text()='--None--'])[2]").click()
    await page.locator("//span[text()='Banking']").click()
    await page.locator("[name='SaveEdit']").click()
    //await page.waitForTimeout(3000)
    const text = await page.locator(".toastMessage.slds-text-heading--small.forceActionsText").innerText()
    console.log(text)
    expect.soft(text).toBe('Account "Saranya Satheesh" was created.')
    await page.locator("//input[@type='file']").setInputFiles('./TestData/Selenium_Locators_Guide.pdf')

})
