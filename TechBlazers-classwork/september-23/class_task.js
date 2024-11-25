const { name } = require("ci-info")

// function testScores(arrayOfScores){
//     let results = arrayOfScores.filter(score => score >= 70)
//     return results
// }
// const scores = testScores ([30, 40, 50, 60, 70, 80, 90, 100])
// console.log(scores)



// function increaseScores(array){
//     let newarray = array.map(score => score + 5)
//     return newarray 
// }
// const mapScores = increaseScores ([85, 92, 78, 88, 95])
// console.log(mapScores)





// function findSquares(array){
//     let newarray = array.map(score => score ** 2)
//     return newarray
// }
// const squareNumbers = findSquares ([2, 4, 6, 8, 10])
// console.log(squareNumbers)



// function distributeBooks(array){
//     let newList = []
//     for(const names of array){
//         newList  = names
//     }
//     return newList
// }
// const nameInArray = distributeBooks (["Emily", "Jack", "Sophia", "Daniel"])
// console.log(nameInArray)


// function classTime(array){
//     let afternoonList = array.filter(time => time.includes("PM"))
//     return afternoonList
// }

// const timeList = classTime(["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"])
// console.log(timeList)




// function calculateExpenses(array){
//     let expensesTotal = 0
//     for(var total in array){
//         expensesTotal += array[total]
//     }
//     return expensesTotal
// }
// const initialList = calculateExpenses ({ "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 })


function inputOutput(array){
    let result = array.filter(score => score >= 5)
    return result
}

const score = inputOutput([1, 9, 3, 4, 8])
console.log(score)


function outputInput(array){
    let newArray = 0
    let secondArray = 0
    for(let number of array){
        if(number > newArray){
            secondArray = newArray
            newArray = number
        }
        else if(number >= secondArray && number <= newArray){
            secondArray = number;

        }
    }
   
        return [newArray, secondArray]  
        }
       

    const scoresInArray = outputInput ([10, 3, 7, 1, 0])
    console.log(scoresInArray)









module.exports = {inputOutput, outputInput};
