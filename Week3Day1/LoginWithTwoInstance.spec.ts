import {chromium,webkit,test} from "@playwright/test";

test("Login", async()=>{

    //Load urls's with two separate browser instances for Edge Browser and Webkit

    //Creating insatnce for Edge Browser and launching it
    const edgeBrowser = await chromium.launch({channel: 'msedge'})
    const edgeContext = await edgeBrowser.newContext()
    const edgePage = await edgeContext.newPage()
    //Open url    
    await edgePage.goto("https://www.redbus.in")
    
    //Getting Page title and url name and printing it in terminal to verify
    const title1 = await edgePage.title()
    const url1 = await edgePage.url()

    console.log(title1)
    console.log(url1)

    //Creating insatnce for Webkit Browser and launching it
    const webkitBrowser = await webkit.launch({headless: false})
    const webkitContext = await webkitBrowser.newContext()
    const webkitPage = await webkitContext.newPage()

    //Open url

    await webkitPage.goto("https://www.flipkart.com")

    //Getting Page title and url name and printing it in terminal to verify
    const title2 = await webkitPage.title()
    const url2 = await webkitPage.url()

    console.log(title2)
    console.log(url2)

    








})

