//Capitalize each word of the String

String.prototype.toJadenCase = function() {
    return this.split(" ").map(element => {
        return element.slice(0, 1).toUpperCase() + element.slice(1)
    }).join(" ")
}

let str = "i am currently working in javascript";
console.log(str.toJadenCase()); // I Am Currently Working In Javascript