function  currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
var result = currying(5)(15)(20)
console.log(result)