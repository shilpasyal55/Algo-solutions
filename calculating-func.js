
function executeFunc( num, func) {
    if (func == undefined) {
        return num
    }
    else {
        return func(num)
    }
}
function one(func) {
    return executeFunc(1,func)
}

function two(func){
    return executeFunc(2, func)
}

function three(func) {
    return executeFunc(3, func)   
}

function four(func) {
    return executeFunc(4,func)
}

function five(func) {
    return executeFunc(5,func)
}

function six(func) {
    return executeFunc(6,func)
}

function seven(func) {
    return executeFunc(7,func)
}

function eight(func) {
    return executeFunc(8,func)
}

function nine(func) {
    return executeFunc(9,func)
}

function plus(right) {
    return function(left) {
        return right + left
    }
}

function minus(right) {
    return function (left) {
        return left - right
    }
}

function times(right) {
    return function (left) {
        return right * left
    }
}

function dividedBy(right) {
    return function (left) {
        return  left / right
    }
}

console.log(four(plus(nine())))