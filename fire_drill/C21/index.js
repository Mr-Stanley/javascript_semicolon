let array = [1,2,3,4,5,6,7,8,9,"home","awaymatch"];

//console.log(array);

let newArray = new Array(3);
newArray[0] = 10
newArray[1] = 11
newArray.push(5);
newArray.push(3);
newArray.push(5);
newArray.push(9);


//console.log(newArray)

let result = Array.from(array);


let answer = Array.of(1,2,3,4,5,6,7,8,9,100,200,300,400,500,600,700,800,900,1000)
//console.log(answer)

let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,100,200,300,400,500,600,700,800,900,1000]
let arr = [7,4,5,9]

//let slice = arrayOfNumbers.slice(7)
//console.log(slice)

let answers =  arrayOfNumbers.splice(1,0,55,89, ...arr)
console.log(answers)
console.log(arrayOfNumbers)
//console.log(arr)


let ars = [3,4,5,6,7,8]
ars.forEach((element, index) => {
    let answer = element * 2;
    console.log(answer)
    console.log(index)
})


function multiplyByTwo