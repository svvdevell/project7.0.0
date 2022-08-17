"use strict"

// 1 

function sum(x) {
    if (x == 1 ) return x;
    return x + sum(x - 1);
}

console.log(sum(4));