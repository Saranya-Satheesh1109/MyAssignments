import test from "@playwright/test"

test("Leaftaps Login", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    
    console.log(await page.title())
    await page.locator(`text='CRM/SFA'`).click()
    await page.waitForTimeout(5000)
    console.log(await page.title())

    await page.locator(`text='Leads'`).click()
    await page.waitForTimeout(5000)
    await page.locator(`text='Create Lead'`).first().click()
    await page.locator("#createLeadForm_companyName").fill("Learning Academy")
    await page.locator("#createLeadForm_firstName").fill("Saranya")
    await page.locator("#createLeadForm_lastName").fill("Satheesh")
    await page.locator("#createLeadForm_personalTitle").fill("Mrs")
    await page.locator("#createLeadForm_generalProfTitle").fill("Mrs")
    await page.locator("#createLeadForm_annualRevenue").fill("1200000")
    await page.locator("#createLeadForm_departmentName").fill("IT")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890")
    await page.locator("[name='submitButton']").click()
    await page.waitForTimeout(5000)
    console.log(await page.title())







})