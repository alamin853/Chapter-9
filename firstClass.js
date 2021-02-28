// First Class Function

function add(a, b){
    return a + b
}

// 1. A Function can be Stored in a Variable
var sum = add
console.log(sum(5, 6))

// 2. A Function can be Stored in an Array
var arr = []
arr.push(add)
console.log(arr[0](3, 6))

// 3. A Function can be Stored in Object
var obj = {sum: add}

console.log(obj)
console.log(obj.sum(7, 9))


// 4. We can Create Function as Need
setTimeout(function(){
    console.log('i have created ....')
}, 5000)

// 5. We can Pass Function as Arguments

// 6. We can Return Function from Another Function