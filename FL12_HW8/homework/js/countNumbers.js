function makeNumber(str) {
    let firstArr= str.split('');
    let secondArr = [];
    let i;
    for (i = 0; i < firstArr.length; i++) {
        if(!isNaN(firstArr[i])) {
            secondArr.push(firstArr[i]);
        }
    }
    return secondArr.join('');
}
makeNumber('jhvgjhgi575hy674');

function countNumbers(str) {
    let result = {};
    makeNumber(str).split('').forEach(function (a) {
        if (result[a] !== undefined) {
            ++result[a];
        } else {
            result[a] = 1;
        }
    });
    return result;
}
console.log(countNumbers('fj456y45y5ydhg43yyhgfj7k7l'));