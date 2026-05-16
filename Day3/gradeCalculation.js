let score1 = 30
printScore(score1)
function printScore(score) {
    switch (true) {
        case (score < 35): console.log("Grade:E")
            break;
        case (score > 35 && score < 50): console.log("Grade:D")
            break;
        case (score > 50 && score < 70): console.log("Grade:C")
            break;
        case (score > 70 && score < 90): console.log("Grade:B")
            break;
        case (score > 90): console.log("Grade:A")
            break;
    
        default: console.log("No Grade")
            break;
    }
}