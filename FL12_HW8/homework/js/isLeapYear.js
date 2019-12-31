
function isLeapYear (){
    let someDate = new Date(arguments[0]);
    let year = someDate.getFullYear();
   
    if(isNaN(year)) {
        return(`Invalid Date`)
    } else if (year%4 === 0) {
       
        if (year%100 === 0 && year%400 === 0) {
            return(`${year} is a leap year`)
        } else if(year%100 !== 0) {
            return(`${year} is a leap year`)
        }
    } else {
        return (`${year} is not a leap year`)
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2022-03-10 12:13:14');
isLeapYear(2342345323435252522342);
isLeapYear(1213131313);