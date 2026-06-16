import {test,expect} from "@playwright/test"

test.use({storageState:"Data/SF1_Login.json"})//Using the Storage state data to login into Salesforce using test.use() annotation

//Using test.only() annotation to run only this test
test.only("Using Test only method", async({page})=>{
    
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home")

})

