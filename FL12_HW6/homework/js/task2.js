let a, b, c
a = +prompt('Enter the first value, side a:');
b = +prompt('Enter the second value, side b:');
c = +prompt('Enter the third value, side c:');

if (isNaN(a) || isNaN(b) || isNaN(c) || !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    alert('input values should be ONLY numbers');
     console.log('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
    console.log('A triangle must have 3 sides with a positive definite length');
} else if(a + b < c || a + c < b || b + c < a) {
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
  } else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
  } else if (a === b && a === c && b === c) {
    console.log('Equilateral triangle');
  } else {
    console.log('Scalene triangle')
  }
  