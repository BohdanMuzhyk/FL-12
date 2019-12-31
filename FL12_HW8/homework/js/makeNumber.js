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