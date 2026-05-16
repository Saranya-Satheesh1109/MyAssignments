let value1 = "Chrome"
let value2 = "Sanity"
launchBrowser(value1)
testType(value2)
function launchBrowser(value) {
    if(value == "Chrome") {
        console.log("Chrome Browser is launched")
    }else {
        console.log("No Browser supported!")
    }

}
function testType(value) {
    switch (value) {
        case "Smoke": console.log("Smoke Test")
            break;
        case "Sanity": console.log("Sanity Test")
            break;
        case "Regression": console.log("Regression Test")
            break;
        default: console.log("Smoke Test")
            break;
    }
}