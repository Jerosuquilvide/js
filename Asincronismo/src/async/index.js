const fnAsinc = () => {
    return new Promise((resolve , reject) => {
        (true) 
        ? setTimeout(() => resolve('Async!!!'), 2000)
        : reject(new Error('Error !!!'));
    })
}

const anFn = async () => {
    const someting = await fnAsinc();
    console.log(someting);
    console.log('Hello');
}

console.log('Before');
anFn();
console.log('After');