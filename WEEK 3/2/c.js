const add = (num) => {
    var s = 0;
    for (var i of num) {
        s = s + i;
    }
    console.log(s);
}
add([1, 2, 3, 4, 5, 6]);