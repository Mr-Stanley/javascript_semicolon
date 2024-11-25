//let arrayNumbers = 
function return_object(Array){
   

let number_occurances = {};

Array.forEach(element => {
if (number_occurances[element]){
    number_occurances[element]+=1
    }
    else{

     number_occurances[element] = 1
}
});
    return number_occurances
};
console.log(return_object([1,1,2,3,2,6,8,9,6,8])),

module.exports = returnObject;