import test,{expect} from "@playwright/test"

test("ServiceNow Assignment", async({page})=>{

    //Logging into ServiceNow portal and searching for Service Catalog under All tab
    await page.goto("https://dev296651.service-now.com")
    await page.waitForTimeout(2000)
    await page.locator("[name='user_name']").fill("admin")
    await page.locator("[name='user_password']").fill("E7i*7wNgX*mM")
    await page.locator("//button[text()='Log in']").click()
    await page.locator(".sn-polaris-tab.can-animate.polaris-enabled").first().click()
    await page.waitForTimeout(2000)
    await page.keyboard.type("Service Catalog")
    await page.getByLabel("Service Catalog 1 of 1").first().click()
    await page.waitForTimeout(5000)
    //Selecting the Mobile url in the page by handling the frame
    await page.frameLocator("#gsft_main").getByLabel("Mobiles. Cell phones to meet your business needs.").click()
    await page.waitForTimeout(2000)
    //Selecting the Apple iphone 13 pro in the page by handling the url
    await page.frameLocator("#gsft_main").locator("[class='service_catalog']").nth(2).click()
    await page.waitForTimeout(2000)
    //Handling the details required for the phone
    await page.locator("[class='cat_item_option radio']").nth(0).click()
    await page.locator(".cat_item_option.sc-content-pad.form-control").fill("99")
    await page.selectOption(".form-control.cat_item_option", {value:'unlimited'})
    await page.locator("//label[text()='Sierra Blue']").click()
    await page.locator("//label[text()='512 GB [add $300.00]']").click()
    await page.locator("#oi_order_now_button").click()
    //Assertion of the notification message after clicking on Order Now button
    const notificationText = await page.locator(".notification-icon.icon-check-circle").textContent()
    await expect.soft(notificationText).toBe("Thank you, your request has been submitted")
    //Taking full page screenshot and storing it in the specified path
    await page.screenshot({path: 'TestData/FullPages.png', fullPage: true});


    



})