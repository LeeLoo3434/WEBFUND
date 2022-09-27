var count = 1;
var countElement = document.querySelector("#count");

console.log(countElement);

function add1(){
    count++;
    countElement.innerText = count  + " likes";
}
// end of first box

var count2 = 1;
var count2Element = document.querySelector("#count2");

console.log(count2Element);

function addagain1(){
    count2++;
    count2Element.innerText = count2  + " likes";
}
// end of 2nd box

var count3 = 1;
var count3Element = document.querySelector("#count3");

console.log(count3Element);

function addneveragain1(){
    count3++;
    count3Element.innerText = count3  + " likes";
}
