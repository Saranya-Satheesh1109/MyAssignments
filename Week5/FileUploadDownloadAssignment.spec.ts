import test from "@playwright/test"

test("File Upload", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("//input[@type='file']").first().setInputFiles('./TestData/Selenium_Locators_Guide.pdf')
    await page.waitForTimeout(2000)
    await page.locator("(//input[@type='file'])[2]").setInputFiles('./TestData/Human_Map.jpg')
    await page.waitForTimeout(2000)

})

test("File Donwload", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download")
    const download = page.waitForEvent('download')
    await page.locator("//div/a[text()='TextDoc.txt']").click()
    const fileDownload = await download
    await fileDownload.saveAs("TestData/" + fileDownload.suggestedFilename())



})