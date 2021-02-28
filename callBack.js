function sample(a, b, cb) {
    var c = a + b
    var d = a - b

    var result = cb(c, d)
    return result

}

// function sum(c, d) {
//     return c + d
// }

// var result = sample(6, 4, sum)
// console.log(result)

var result2 = sample(7, 5, function(c, d){
    return c - d
})

console.log(result2)

var result3 = sample(6, 3, function(c, d) {
    return c * d
})

console.log(result3)

var result4 = sample(10, 2, function (c, d) {
    return c / d
})

console.log(result4)
