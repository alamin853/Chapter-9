var arr = [1, 2, 3, 4, 5, 6]

// var sum = arr.reduce(function(prev, curr) {
//     return prev + curr
// }, 0)
// console.log(sum)

// var max = arr.reduce(function(prev, curr) {
//     return Math.max(prev, curr)
// }, 0)
// console.log(max)

function myReduce(arr, cb, prev) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        prev = cb(prev, element)
    }
    return prev
}

var sum = myReduce(arr, function(prev, curr) {
    return prev + curr  
}, 0)
console.log(sum)

var max = myReduce(arr, function(prev, curr) {
    return Math.max(prev, curr)
}, 0)
console.log(max)

var min = myReduce(arr, function(prev, curr) {
    return Math.min(prev, curr)
}, arr[0])
console.log(min)
