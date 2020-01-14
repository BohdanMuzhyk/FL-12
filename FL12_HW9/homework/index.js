const a=1, 
b=2, 
c=3, 
d=4, 
e=5, 
f=6,
j=8;

// 1 task
function convert() {
    let arr = [];
    let i;
    for (i=0; i<arguments.length; i++) {
      let item = arguments[i];
      if (typeof item === 'string') {
        arr.push(parseInt(item));
      } else {
        arr.push(item.toString());
      }
    }
  return arr;
}
convert('1',b,c,'4')

//2 task

function executeforEach(arr, callback) {
  let i
    for (i = 0; i < arr.length; i++) {
         callback(arr[i]);
    }
}
executeforEach([a,b,c], function(el) { 
    console.log(el * b); 
}); 

// 3 task

function mapArray(arr, callback) {
    let res = [];
    executeforEach(arr, function(el) {
    res.push(callback(parseInt(el)));
});
return res;
}
mapArray([b,'5',j],function(el){
	return console.log(el+c)
})

// 4 task

function filterArray(arr, callback) {
  const res = [];
  executeforEach(arr, function(el) {
    if (callback(el)) {
      res.push(el);
    }
  });
  return res;
}
filterArray([b,e,j],function(el){
	return console.log(el%b===0)
})

// 5 task
function flipOver(str) {
    let revStr = '';
    for(let i = str.length-1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}
flipOver('hey world');

// 6 task
function makeListFromRange (arr) {
	let res = [];
	let i;
	for (i=arr[0]; i<=arr[1]; i++) {
	res.push(i);
	} return res
}
	makeListFromRange([b,j])

// 7 task
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
function getArrayOfKeys(arr, key) {
   let res = [];
    executeforEach(arr, function (el) {
        res.push(el[key]);
    });
return res;
}
getArrayOfKeys(actors, 'name')


// 8 task
const t=30, z=58, x=14,n=48, m=31,l=29;
	function substitute(arr) {
    return mapArray(arr, function(el) {
        if(el < t) {
          return '*';
        }
    return el; 
    });
}

console.log(substitute([z, x, n, b, m, l])); 


// 9 task
const year =2019, h=0;
function getPastDay(date, lastDays) {
    const milisec = 86400000;
    return new Date(date - milisec * lastDays).getDate();
}
const date = new Date(year, h, b);
getPastDay(date, a);


// 10 task
function formatDate(yourDate) {
  const minutes = yourDate.getMinutes();
  const hours = yourDate.getHours();
  const dayOfMonth = yourDate.getDate();
  const month = yourDate.getMonth();
  const year = yourDate.getFullYear();
  const someNumber = 10;
 
    return (
    `${year}/${month + 1}/${dayOfMonth} ` +
    `${hours < someNumber ? '0' : ''}${hours}:` +
    `${minutes < someNumber ? '0' : ''}${minutes}`
  );
}

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));