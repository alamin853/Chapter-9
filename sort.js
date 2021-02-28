var persons = [
    {
        name: 'Alamin',
        age: 23
    },

    {
        name: 'Tanvir',
        age: 20
    },

    {
        name: 'Endika',
        age: 24
    },

    {
        name: 'Sahadat',
        age: 21
    }
]

var arr = [2, 9, 3, 8, 4, 7, 5, 1, 0, 6, -2]
// arr.sort()
// console.log(arr)

arr.sort(function(a, b){
    if(a < b){
        return 1
    }
    else if(a > b){
        return -1
    }
    else{
        return 0
    }
})
console.log(arr)

persons.sort(function(a, b){
    if(a.age < b.age){
        return 1
    }
    else if(a.age > b.age){
        return -1
    }
    else{
        return 0
    }
})
console.log(persons)

var result = arr.every(function(value) {
    return value % 2 == 0
})
console.log(result)

var result2 = arr.every(function(value) {
    return value >= 0
})
console.log(result2)

var result3 = arr.some(function (value) {
    return value % 2 == 1
})
console.log(result3)

var result4 = arr.some(function (value) {
    return value < 0
})
console.log(result4)