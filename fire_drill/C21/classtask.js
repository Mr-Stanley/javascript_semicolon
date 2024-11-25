function addTwoIndex (Array){
    final_output = []
    first_set = Array[0] + Array[1]
    second_set = Array[2] + Array[3]
    third_set = Array[4] + Array[5]
    final_output.push(first_set, second_set, third_set)

    return final_output
}
//console.log(addTwoIndex([2,3,4,5,6,7]))
fun