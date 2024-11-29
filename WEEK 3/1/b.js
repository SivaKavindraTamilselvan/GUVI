/*
CONVERT THE STRING TO TITLE CAPS IN STRING ARRAY
 */
//anonymous function
console.log("ANONYMOUS FUNCTION");
const convert = function (str) {
    a = "";
    s = str.split(' ');
    for (var i of s) {
        i = i.toLowerCase();
        i = i.charAt(0).toUpperCase() + i.substring(1);
        a = a + i + " ";
    }
    console.log(a);
}
convert("Guvi fullstack development");
console.log("...................");

//IIFE
console.log("IIFE FUNCTION");
(function (str) {
    a = "";
    s = str.split(' ');
    for (var i of s) {
        i = i.toLowerCase();
        i = i.charAt(0).toUpperCase() + i.substring(1);
        a = a + i + " ";
    }
    console.log(a);
})("GUVI Fulltstack development");