/*
REMOVE DUPLICATES IN AN ARRAY
 */
//anonymous function
console.log("ANONYMOUS FUNCTION");
const a = function (nums) {
    array = [];
    for (var v of nums) {
        if (array.includes(v)) {
            continue;
        }
        else {
            array.push(v);
        }
    }
    return array;
}
const b = a([1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8]);
console.log(b);

console.log("...................");

//IIFE
console.log("IIFE FUNCTION");
(function (nums) {
    array = [];
    for (var v of nums) {
        if (array.includes(v)) {
            continue;
        }
        else {
            array.push(v);
        }
    }
    console.log(array);
})([1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8]);