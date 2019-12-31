  
let pipe = (...args) => {
    return args.reduce(function(arg1, func) {
        return func(arg1);   
    });
}
function addOne(x) {
    return x + 1;
}
pipe(1, addOne); 
pipe(1, addOne, addOne);