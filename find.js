var arr = [7, 9, 0, 6, 2, 9, 5, 3]

var result = arr.find(function(value) {
    return value == 5
})
console.log(result)

var result2 = arr.findIndex(function(value) {
    return value == 5
})
console.log(result2)

function myFind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(cb(element)){
            // return element
            return i
        }
    }
}

var result3 = myFind(arr, function(value) {
    return value == 3
})
console.log(result3)