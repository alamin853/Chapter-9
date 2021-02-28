var arr = [2, 5, 9, 4, 6, 8, 10, 11]

var filterArr = arr.filter(function(value){
    return value % 2 == 0
})
// console.log(filterArr)

function myFilter(arr, cb) {
    var even = []

    for (let i = 0; i < arr.length; i++) {
        var element = arr[i];
        if(cb(element, i , arr)){
            even.push(element)
        }
    }
    return even
}
console.log(myFilter(arr, function(value){
    return value % 2 == 1
}))

console.log(myFilter(arr, function(value) {
    return value > 8
}))