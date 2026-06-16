import {test,expect} from "@playwright/test"

test.use({storageState:"Data/SF1_Login.json"})//Using the Storage state data to login into Salesforce using test.use() annotation

//Naviagate to page using test.slow() annotation
test("Using Test slow annotation", async({page})=>{
    test.slow()
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")

})

//Using test.fail() annotation to check if the test fails if the assertion is correct
test.fail("Using Test fail annotation", async({page})=>{

    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home")
    
})

