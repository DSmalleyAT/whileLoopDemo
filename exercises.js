console.log("FULL SET");

//Example I
console.log('Example I');
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

//Example II
console.log('Example II');
while (i > 1) {
    i--;
    console.log(i);
}

//Example III
console.log('Example III');
let num = 10000;
while (num > 10) {
    num /= 2;
    console.log(num);
}

//Example IV
console.log('Example IV');
let j = 0;
while (j < 12) {
    j++;
    if (j === 3) {
        continue;
    }
    console.log(j);
}

//Example V
console.log('Example V');
let k = 0;
while (k < 12) {
    k++;
    if (k === 3 || k === 6) {
        continue;
    }
    console.log(k);
}
