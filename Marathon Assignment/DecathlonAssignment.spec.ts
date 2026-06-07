import test,{expect} from "@playwright/test"

test("Decathlon Assignment", async({page})=>{

    await page.goto("https://www.decathlon.in/")
    await expect.soft(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App")//Verify the page title
    await page.getByRole("searchbox").click()
    await expect.soft(page.getByRole("searchbox")).toBeEnabled()//Verify whether the search box is enabled
    await page.getByRole("searchbox").fill("shoes")
    await page.keyboard.press("Enter")//Using the keyboard action "Enter"
    await page.waitForTimeout(2000)
    const title = await page.title()
    console.log("The shoes page title is : " + title)
    expect(title).toBe("Search | shoes")//Printing the shoe page title
    //Applying filters
    await page.locator("//span[text()='Gender']").click()
    await page.locator("(//span[text()='Men'])[2]").click()
    await page.locator("//span[text()='Category']").click()
    await page.locator("//span[text()='Sport shoes']").click()
    await page.locator("//span[text()='Size']").click()
    await page.locator("//span[text()='Uk 10.5 - eu 45']").click()
    await page.locator("//span[text()='Most relevant']").click()
    await page.locator("//span[text()='Price (high → low) ']").click()
    await page.getByAltText("Men's Breathable Mesh Running Shoes KS900 - Light Grey").click()
    await page.waitForTimeout(2000)
    await page.locator("//span[text()='UK 10.5 - EU 45']").click()
    await page.locator("//span[text()='Add to cart']").click()
    await page.waitForTimeout(2000)
    //Fetching the message on pop up(Toast message)
    const message = await page.locator("//h3[@class='text-[16px]']").textContent()
    expect.soft(message).toBe("Product(s) added to cart")
    console.log("The message on the pop up is : " + message)
    await page.getByLabel("Cart").click()
    await page.waitForTimeout(2000)
    const amount = await page.locator("(//div[@class='flex gap-1'])[3]").innerText()
    console.log("The total amount is : " + amount)//Printing the total amount

})
