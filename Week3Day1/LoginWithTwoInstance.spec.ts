import {chromium,webkit,test} from "@playwright/test";

test("Login", async()=>{

    const edgeBrowser = await chromium.launch({channel: 'msedge'})
    const edgeContext = await edgeBrowser.newContext()
    const edgePage = await edgeContext.newPage()

    await edgePage.goto("https://www.redbus.in")

    const title1 = await edgePage.title()
    const url1 = await edgePage.url()

    console.log(title1)
    console.log(url1)

    const webkitBrowser = await webkit.launch({headless: false})
    const webkitContext = await webkitBrowser.newContext()
    const webkitPage = await webkitContext.newPage()

    await webkitPage.goto("https://www.flipkart.com")

    const title2 = await webkitPage.title()
    const url2 = await webkitPage.url()

    console.log(title2)
    console.log(url2)

    








})

