function AtmCardNumber(cardNumber){
		if (cardNumber.length == 16){
		if(cardNumber.startsWith("4") || cardNumber.startsWith("5") || cardNumber.startsWith("6")) {
		return true;
		}
		}
		else {
		return false;
		}
}
console.log(AtmCardNumber("4526890256786514"))

//Let arrayOfNumbers = {1, 2, 4, 5}
//let Person = {	FirstName: "Bola",
		//LastName: "Adaeze",
		//years: 	26,
		//work: "student"
//}
	//for(let key in Person)
//console.log(Person[key]);


const result = (numTwo, numThree)=> numTwo+ numThree
console.log(result(2,3));