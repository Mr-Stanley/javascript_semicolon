const returnObject = require("./returnObject.js");
test("Test array and return Objecr"), ()=>{
    let arr = [1,1,2,3,2,6,8,9,6,8]
    let result = returnObject(arr)
    expected(result).toBe({ '1': 2, '2': 2, '3': 1, '6': 2, '8': 2, '9': 1 })

}