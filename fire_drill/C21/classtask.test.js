const addTwoIndex = require("./classtask.js");
test(" return addTwoIndex", () => {
    let arrayNumbers = [2,3,4,5,6,7]
    let result = addTwoIndex(arrayNumbers)
    expect(result).toStrictEqual([5,9,13])
})