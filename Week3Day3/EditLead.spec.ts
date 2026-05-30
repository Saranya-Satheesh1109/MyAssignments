import test from "@playwright/test"

test("Edit Lead", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    await page.locator(`text='CRM/SFA'`).click()
    await page.waitForTimeout(5000)

    await page.locator(`text='Leads'`).click()
    await page.waitForTimeout(5000)
    await page.locator(`text='Create Lead'`).first().click()
    await page.locator("#createLeadForm_companyName").fill("Learning Academy")
    await page.locator("#createLeadForm_firstName").fill("Saranya")
    await page.locator("#createLeadForm_lastName").fill("S")
    await page.locator("[name='submitButton']").click()
    await page.waitForTimeout(5000)
    await page.locator("//a[text()='Edit']").click()
    await page.waitForTimeout(2000)
    await page.locator("#updateLeadForm_companyName").fill("VSH Learning Academy")
    await page.locator("(//input[@class='smallSubmit'])[1]").click()
    await page.waitForTimeout(2000)
  





})