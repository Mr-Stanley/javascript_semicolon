function add(numberOne, numberTwo){
	let result = numberOne + numberTwo;
	return result;
}

function subtract(numberTwo, numberOne){
	return numberTwo - numberOne;
}
function evenNumbers(arr){
	let newArray = [];
	for(let number of arr){
	if(number % 2 == 0)
	newArray.push(number)
	}
	return newArray;
	}

module.exports = {add, subtract, evenNumbers};