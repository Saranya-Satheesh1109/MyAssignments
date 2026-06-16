import {test,expect} from "@playwright/test"

//Verify Home page
test("Leaftaps Login Storage State", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("#password").fill("crmsfa")
    await page.locator("//input[@class='decorativeSubmit']").click()
    const title = await page.title()
    await expect(title).toBe("Leaftaps - TestLeaf Automation Platform")

})

//Using test.fail() to check the Invaild login session -> Test passes as the credentials are wrong
test.fail("Invalid Login using Test Fail annotation", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("#password").fill("crmsf")
    await page.locator("//input[@class='decorativeSubmit']").click()

})

//Using test.fixMe() annoation to skip the test which needs to be fixed
test.fixme("Using FixMe annotaion to fix the test", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("#password").fill("crmsfa")
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.locator(`text='CRM/SFA'`).click()
     await page.locator(`text='Leads'`).click()
    await page.waitForTimeout(5000)
    await page.locator(`text='Create Lead'`).first().click()

})

//Skip the test using test.skip() annotation
test.skip("Using Test Skip annotation", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("#password").fill("crmsfa")
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.locator(`text='CRM/SFA'`).click()

})

