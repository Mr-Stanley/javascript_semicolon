function sumEvenNumbers (Array){
	let sum = 0
	let newArray = []; 
	for(let number of Array){
	if (number % 2 === 0)
	sum += number
	}
	return sum;
	}


function findMax (Array) {
	let maxNum = Array[0]
	for(let num of Array){
	if(num > maxNum)
	maxNum = num
	}
	return maxNum
	}
	
function countOddNumbers(Array){
	let count = 0
	for(let num of Array){
	if (num % 2 != 0)
	count +=1
	}
	return count
	}

function isPrime(number){
	for (let index = 2; index < number/2; index++){
		if(number % index == 0){
	return false
	}
	}
	return true
	}


function findFirstDuplicate(Array){
	let duplicates = Array.filter((item, index) => Array.indexOf(item) < index);

	return duplicates[0];
	}
function reverseArray(Array){
	let newArray = [];
	for(let index = Array.length -1; index >= 0; index--){
		
	newArray.push(Array[index]);
	}
	return newArray;
	}


function factorial(number){
	let factorOfNumber = 1
	
	for(index = 1; index <= number; index ++){
	factorOfNumber*= index;
	}
	return factorOfNumber
	}

function isPalindrome(String){
	 let reversedString = " ";
    for (let index = String.length - 1; index >= 0; index--) {
        reversedString += String[index];
    }
    if (reversedString == String) {
        return true
    } else 
        return false;
    
    }






	

module.exports = {sumEvenNumbers,findMax,countOddNumbers,isPrime,findFirstDuplicate,reverseArray,factorial,isPalindrome};
