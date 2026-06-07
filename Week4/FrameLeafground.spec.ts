import test,{expect} from "@playwright/test"

test("Frame Leafground", async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml")
    const frameVal = page.frames()
    console.log("The total number of Frames present in the page : " + frameVal.length)//Printing the total number of Frames present in the page
    //Handling the button inside the first frame using frameLocator and getting the text upon clicking
    await page.frameLocator("(//iframe)[1]").locator("#Click").click()
    const clickTest = await page.frameLocator("(//iframe)[1]").locator("#Click").innerText()
    expect.soft(clickTest).toBe("Hurray! You Clicked Me.")
    //Handling the button inside the nested frame using the frameVal and getting the text upon clicking
    await frameVal[4].locator("#Click").click()
    const clickTest2 = await frameVal[4].locator("#Click").innerText()
    expect.soft(clickTest2).toBe("Hurray! You Clicked Me.")

})
