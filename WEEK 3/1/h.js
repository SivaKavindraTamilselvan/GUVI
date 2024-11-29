/*
ROTATE THE ARRAY BY K TIMES
 */
//anonymous function
console.log("ANONYMOUS FUNCTION");
const a = function (arr, k) {
    k = k % arr.length;
    return [...arr.slice(k), ...arr.slice(0, k)];
}

const array = [1, 2, 3, 4, 5];
const k = 2;
const b = a(array, k);
console.log(b);

console.log("...................");

//IIFE
console.log("IIFE FUNCTION");
(function (arr, k) {
    k = k % arr.length;
    console.log([...arr.slice(k), ...arr.slice(0, k)]);
})([1, 2, 3, 4, 5], 2);
