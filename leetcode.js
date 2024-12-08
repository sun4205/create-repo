const last = (arr) =>arr.length ? arr.lenght[arr.length-1]:-1;

function createCounter(n){
    let count = n;
    return function(){
        return count++
    }
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());