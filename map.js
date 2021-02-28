var arr = [1, 2, 3, 4, 5]

var square = arr.map(function(value){
    return value * value
})

// console.log(arr)
// console.log(square)

function myMap(arr, cb) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        var temp = cb(element)
        newArr.push(temp)
    }
    return newArr
}
// console.log(myMap(arr))

var qb = myMap(arr, function(value){
    return value * value * value
})
console.log(qb)

var mTen = myMap(arr, function(value){
    return value * 10
})
console.log(mTen)