const {add, subtract, evenNumbers} = require("./function.js");


	let numberOne = 2;
	let numberTwo = 29;

test("Add two numbers", () => {
	
	let result = add(numberOne, numberTwo);
	
	expect(result).toBe(31);

})

test("subtract two numbers", () => {
	let result = subtract(numberOne, numberTwo);

	expect(result).toBe(-27);
	
})

test("return evenNumbers", () => {
	let arrayOfNumbers = [1,2,3,4,5,6];
	let result = evenNumbers(arrayOfNumbers);
	expect(result).toEqual([2,4,6]);
})