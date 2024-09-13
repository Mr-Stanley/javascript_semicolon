function multiplyByTwo(number){
	let multiplier = 2;
	return number * multiplier;
};
function calculate(num, callBack){
	return callBack(num)
};

console.log(calculate(3,multiplyByTwo));

function calculate(num, callBack){
	return callBack(num)
};
console.log(calculate(3,function(number){
	let multiplier = 2;
	return number * multiplier;
}));

function calculate(num, callBack){
	return callBack(num)
};
console.log(calculate(3,(number)=>{
	let multiplier = 2;
	return number * multiplier;
}));


let arr = [1, 2, 3, 4];
arr.push(2);
console.log(arr)

arr.pop(1);
console.log(arr)


let array = [1,2,3,4,5,6]
array.shift();
console.log(array)

array.unshift(3);
console.log(array)
function isPrime(number){
	if(number <= 1){
		return false
	}
	for(index = 2; number <= math.sqrt; index++){
		if(number % index == 0){

	return false
	}
	}
	else
	 return true
	}
	console.log(isPrime(7))








