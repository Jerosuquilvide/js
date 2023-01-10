function* iteration(array){
    for(let value of array){
        yield value;
    }
}

const it = iteration([1,2,3,4,5,6,7]);

console.log(it.next().value)