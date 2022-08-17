"use strict"

// 1 

// function sum(x) {
//     if (x == 1 ) return x;
//     return x + sum(x - 1);
// }

// console.log(sum(4));

// 2 

function findSmallWords(str) {
    let words = str.split(' ');
    let result = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return result;
}
console.log(findSmallWords("Lorem, ipsum dolor sit amet consectetur adipisicing elit."));