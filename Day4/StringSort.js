//Declaring variables
let anagram1 = "Hello"
let anagram2 = "World"

//Calling function by passing the arguments
isAnagram(anagram1,anagram2)

//Funtion isAnagram
function isAnagram(val1, val2) {
    
    //Using methods to get the sorted strings
    let ab = anagram1.trim().toLowerCase().split("").sort().toString()
    let bc = anagram2.trim().toLowerCase().split("").sort().toString()
    //Condition to check the Anagram logic
    if(ab === bc) {
        console.log("True")
    } else {
        console.log("False")
    }
        
}