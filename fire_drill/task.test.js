const {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate,reverseArray,factorial, isPalindrome, sumMultiplesOfThreeAndFive,isLeapYear} = require("./task.js");

test("return sumEvenNumbers", () => {
	let arrayOfNumber = [1,2,3,4,5,6];
	let result = sumEvenNumbers(arrayOfNumber);
	expect(result).toBe(12);
})


test(" return findMax", () => {
	let arrayOfNumber = [1,2,3,9,4,5,6];
	let result = findMax(arrayOfNumber);
	expect(result).toEqual(9);
})


test(" return countOddNumbers", () => {
	let arrayOfNumber = [1,2,3,9,4,5,6,7,8,10];
	let result = countOddNumbers(arrayOfNumber);
	expect(result).toBe(5);
})


test("return Prime", () => {
	let number = 19;
	let result = isPrime(number)
	expect(result).toBe(true);
})



test("return firstDuplicate", () => {
	let arrayOfNumber = [1,2,3,4,5,6,6,7,8,9,10,10];
	let result = findFirstDuplicate(arrayOfNumber);
	expect(result).toBe(6);
})


test("return reverseArray", () => {
	let arrayOfNumber = [1,2,3,4,5,6,7,8,9,10];
	let result = reverseArray(arrayOfNumber);
	expect(result).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
})


test("return factorialOfNumber", () => {
	let number = 4;
	let result = factorial(number)
	expect(result).toBe(24);
})


test("return isPalindrome", () => {
	let String = "racecar"
	let result = isPalindrome(String)
	expect(result).toBe(true);
})

test("return sumMultiplesOfThreeAndFive", () => {
	let number = 10;
	let result = sumMultiplesOfThreeAndFive(number)
	expect(result).toBe(23);
})

test(" return isLeapYear", () => {
	let year = 1999;
	let result = isLeapYear(year)
	expect(result).toBe(false);
})
	

