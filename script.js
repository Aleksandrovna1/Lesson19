"use strict";
// №1
let b = 3;
function IsNumberInRange(b) {
    return( b > 0 && b < 10 ? true : false);
}
console.log(IsNumberInRange(b));

// №2
let d = 7;
function IsEven(d) {
    return( d % 2 == 0 ? true : false);
}
console.log(IsEven(d));

// №3
var value = +prompt('value?', '');
switch(value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert('Not found');
        break;
    }

// №4
function Min(a, b){
    if (a < b){
        return a;
    }else{
        return b;}
    }
console.log(Min(5,-1));
console.log(Min(3,5));