let a, b, c
a = +prompt('Enter the varible a:');
b = +prompt('Enter the varible b:');
c = +prompt('Enter the varible c:');
 
let x, x1, x2, d 

if (isNaN(a) || isNaN(b) || isNaN(c) || !a || !b ||c === 0) {
	console.log('Invalid input data');
 
}	else {
		d=b*b-4*a*c;

	if (d<0) {
	console.log('Quadratic equation no solution, d<0');
	} else if (d===0){
	x=-b/(2*a);
	console.log('The answer is: x= ' + Math.round(x));
	} else {
	x1=(-b+Math.sqrt(d))/2*a;
	x2=(-b-Math.sqrt(d))/2*a;
	console.log('The answer is: x1= ' + Math.round(x1) + ' x2= ' + Math.round(x2));
	}
}