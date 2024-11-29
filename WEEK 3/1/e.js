/*
PALINDROME IN AN ARRAY
 */
//anonymous function
console.log("ANONYMOUS FUNCTION");
const a = function (s) {
    k=[];
    for (var str of s) {
        var b = str.split('');
        var c=b.reverse();
        c=c.join('');
        if (str === c) {
            k.push(str);
        }
    }
    return k;
}
const array=a(["malayalam","guvi","catac","fullstack"]);
console.log(array);

console.log("...................");

//IIFE
console.log("IIFE FUNCTION");
(function (s) {
    k=[];
    for (var str of s) {
        var b = str.split('');
        var c=b.reverse();
        c=c.join('');
        if (str === c) {
            k.push(str);
        }
    }
    console.log(k);
})(["malayalam","guvi","catac","fullstack"]);