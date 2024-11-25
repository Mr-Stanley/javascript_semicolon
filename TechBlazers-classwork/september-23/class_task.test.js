const { inputOutput, outputInput} = require("./class_task");
// // test("testScores", () => {
// //     let arrayOfScores = [30, 40, 50, 60, 70, 80, 90, 100];
// //     let result = testScores(arrayOfScores);
// //     expect(result).toEqual([ 70, 80, 90, 100 ]);
// // });



// // test("increase scores of student", () => {
// // let arrayScores = [85, 92, 78, 88, 95];
// // let result = increaseScores(arrayScores);
// // expect(result).toEqual([90, 97, 83, 93, 100])

// // });




// // test("find squares of each number", () => { 
// //     let arrayOfNumbers = [2, 4, 6, 8, 10];
// //     let result = findSquares(arrayOfNumbers);
// //     expect(result).toEqual([ 4, 16, 36, 64, 100 ])

// // });




// // test("distributeBooks", () => {
// //     let arrayOfNames = ["Emily", "Jack", "Sophia", "Daniel"];
// //     let result = distributeBooks(arrayOfNames);
// //     expect(result).toBe("Daniel")



// // });


// // // test("findClasses", () => {
// // //     let arrayOfTimes = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM']
// // //     let result = classTime(arrayOfTimes)
// // //     console.log(result);
    
// // //     expect(result).toEqual([ '1:00 PM', '3:00 PM', '5:00 PM' ])

// // // });




// test("calculate expenses", () => {
//     let arrayOfObjects = { "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 }
//     let result = calculateExpenses(arrayOfObjects)
//     expect(result).toBe(380)
// })



test("inputOutput", () => {
    let scores = [1, 4, 3, 4, 0]
    let result = inputOutput(scores)
    expect(result).toEqual([4,4])

})


test("outputInput", () => {
    let scores = [2, 3, 5, 1, 7]
    let result = outputInput(scores)
    expect(result).toEqual([7,5])
})