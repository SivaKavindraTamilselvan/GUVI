/*
SUM OF ELEMENTS IN AN ARRAY
 */
//anonymous function
console.log("ANONYMOUS FUNCTION");
const add = function (num) {
    var s = 0;
    for (var i of num) {
        s = s + i;
    }
    console.log(s);
}
add([1, 2, 3,4,5,6]);
console.log("...................");

//IIFE
console.log("IIFE FUNCTION");
(function (num) {
    var s = 0;
    for (var i of num) {
        s = s + i;
    }
    console.log(s);
})([1, 2, 3,4,5,6]);
