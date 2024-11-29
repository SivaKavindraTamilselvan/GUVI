const odd = (num) => {
    for (var i of num) {
        if (i % 2 != 0) {
            console.log(i + " ");
        }
    }
}
const n = [1, 2, 34, 45, 21, 67];
odd(n);