/*
PALINDROME IN AN ARRAY
 */
//anonymous function
console.log("ANONYMOUS FUNCTION");
const a = function (arr1, arr2) {
    var arr = [...arr1, ...arr2];
    arr = arr.sort();
    if (arr.length % 2 === 0) {
        const c = arr[(arr.length) / 2];
        const d = arr[(arr.length - 2) / 2];
        const e = c + d;
        return e / 2;
    }
    return arr[(arr.length - 1) / 2];
}
var b = a([1, 2, 3], [6, 7, 8]);
console.log(b);

console.log("...................");

//IIFE
console.log("IIFE FUNCTION");
(function (arr1, arr2) {
    var arr = [...arr1, ...arr2];
    arr = arr.sort();
    var e=0;
    if (arr.length % 2 === 0) {
        const c = arr[(arr.length) / 2];
        const d = arr[(arr.length - 2) / 2];
        e = c + d;
    }
    console.log(e / 2);
})([1, 2, 3], [6, 7, 8]);