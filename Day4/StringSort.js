//Declaring variables
let anagram1 = "He llo"
let anagram2 = "Wo rld"

//Calling function by passing the arguments
isAnagram(anagram1,anagram2)

//Funtion isAnagram
function isAnagram(val1, val2) {
    
    //Using methods to get the sorted strings
    let updatedString1 = val1.replace(/\s/g, '').toLowerCase().split("").sort().toString()
    let updatedString2 = val2.replace(/\s/g, '').toLowerCase().split("").sort().toString()
    //Condition to check the Anagram logic
    if(updatedString1 === updatedString2) {
        console.log("True")
    } else {
        console.log("False")
    }
        
}
