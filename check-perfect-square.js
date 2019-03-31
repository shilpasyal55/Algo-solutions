//Check whether the number is perfect square or not

var isSquare = function (n) {
    let num = Math.sqrt(n);
    return num % 1 == 0 
}

console.log(isSquare(9));