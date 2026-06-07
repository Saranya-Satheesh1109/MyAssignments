import test,{expect} from "@playwright/test"

test("PVR Assignment", async({page})=>{

    await page.goto("https://www.pvrcinemas.com/")
    //Choosing Cinema and its related dropdowns
    await page.locator(".cities-overlay.cities-active").nth(5).click()
    await page.waitForTimeout(3000)
    await page.locator(".cinemas-inactive").click()
    await page.waitForTimeout(2000)
    await page.locator(".p-dropdown-trigger").nth(1).click()
    await page.waitForTimeout(2000)
    await page.locator("//li/span[text()='INOX Chennai Citi Centre,Dr. R. K. Salai Chennai']").click()
    await page.waitForTimeout(2000)
    await page.locator(".p-dropdown-item").nth(2).click()
    await page.waitForTimeout(2000)
    await page.locator("//li/span[text()='PARIMALA AND CO']").click()
    await page.locator("//span/span[text()='10:20 AM']").click()
    await page.waitForTimeout(2000)
    await page.getByLabel("Submit").click()//Clicking on Book option
    await page.waitForTimeout(5000)
    await page.locator("//button[text()='Accept']").click()//Clcking on Accept button on the pop up
    await page.locator("(//td/span[text()='15'])[3]").click()//Selecting the seat
    //Getting the Booking summary deatils
    await expect.soft(page.locator("//h5[text()='PARIMALA AND CO']")).toHaveText("PARIMALA AND CO")
    const movieName = await page.locator("//h5[text()='PARIMALA AND CO']").innerText()
    console.log("The movie Name is : " + movieName)
    const seatNumber = await page.locator(".seat-number").innerText()
    console.log("The seat Number is : " + seatNumber)
    const totalAmount = await page.locator(".grand-prices").innerText()
    console.log("The total Amount is : " + totalAmount)
    const title = await page.title()
    console.log(title)
    expect.soft(title).toBe("PVR Cinemas")
    
})
