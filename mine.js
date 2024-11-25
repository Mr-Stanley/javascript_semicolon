let userDetails = {
    firstName : "stanley",
    lastName : "ugoo",
    sex : "male",
}
let result = JSON.stringify(userDetails)
    console.log(result)

    let data = '{"firstName":"stanley","lastName":"ugoo","sex":"male"}'
    let answer = JSON.parse(data);

    console.log(answer)
