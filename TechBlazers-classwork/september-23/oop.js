// let animal = {
//     name : "unknown",
//     color : "black",
//     sound : function(){
//         return '${this.name} makes a sound' 
//     }

// }
// console.log(animal)
// let dog = Object.create(animal);
// dog.color = "brown"
// dog.name = "bullDog"
// dog.numberOfLegs = 4;
// console.log(dog)

// let cat = {};
// let frenchCat = Object.setPrototypeOf(cat, animal)
// console.log(frenchCat.name)
// frenchCat.name = "frenchCat";

// let tiger = {
//     name : "nigerianTiger",
//     sex : "unknown",
//     _proto_ : animal,
// }




function person(name,gender){
    this.name = name;
    this.gender = gender;

}
let personOne = new person ("stanley", "female");
console.log(personOne.name)

module