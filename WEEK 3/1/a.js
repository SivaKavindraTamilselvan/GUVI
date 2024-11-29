/*
ODD NUMBERS IN AN ARRAY 
 */

//anonymous function
console.log("ANONYMOUS FUNCTION");
const odd = function (num) {
    for (var i of num) {
        if (i % 2 != 0) {
            console.log(i + " ");
        }
    }
}
const n = [1, 2, 34, 45, 21, 67];
odd(n);
console.log("...................");

//IIFE
console.log("IIFE FUNCTION");
(function (num) {
    for (var i of num) {
        if (i % 2 != 0) {
            console.log(i + " ");
        }
    }
})([1, 2, 34, 54, 27, 67]);