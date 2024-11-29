const convert = (str) => {
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