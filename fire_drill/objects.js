const book = { tittle : 'The Great Gatsby', author : 'F. Scoth Fitzgerald', yearPublished : 1925};
	
	const {tittle, author} = book
console.log(tittle + " by " + author);



let car = {make : 'Toyota', model : 'camry', year : 2021};

function loopObject (object) {
	for(let properties in car){
		console.log(properties + ": ", car[properties])
	}
	}
console.log(loopObject(car))


const counter = { count : 2, steps : 1, increament : function(){
			return this.count += this.steps}
			}
console.log(counter.increament());







































