function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + '!'
    }
    return greetings
}

var hello = greet('Hello')
console.log( hello('Alamin Bhuiyan'))

var gm = greet('Good Morning')
console.log( gm('Alamin Bhuiyan'))

var gn = greet('Good Night')
console.log( gn('Alamin Bhuiyan')) 



// function base(b) {
//     return function(n) {
//         var result = 1
//         for (var i = 0; i < b; i++) {
//             result = result * n
//         }
//         return result
//     }
// }

// var base10 = base(10)
// console.log(base10(2))