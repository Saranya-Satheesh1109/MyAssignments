import test from "@playwright/test"

test("Leaftaps Login Storage State", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("#password").fill("crmsfa")
    await page.locator("//input[@class='decorativeSubmit']").click()

    await page.context().storageState({path:'Data/LF1_Login.json'})


})