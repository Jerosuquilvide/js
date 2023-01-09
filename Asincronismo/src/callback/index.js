function sum(num1, num2){
    return num1 + num2;
}

function call(num1, num2, callback){
    return callback(num1,num2);
}

console.log(call(2,2,sum));

setTimeout(function() {
    console.log("Hello JS!");
}, 2000)

function gretting(name){
    console.log(`Hello ${name} !`);
}

setTimeout(gretting,2000,'Jero');