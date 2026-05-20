let string2 =  "   fly me   to   the moon  " //Declaring string2 variable
let arr2 = string2.trim();//Trim to remove spaces
let array = arr2.split("  ")[2].trim().split(" ")//Spillting the trimmed variable and getting the values on index 2 and splittling it further based on space
console.log(array[1].length)//Printing the length of last value based on index