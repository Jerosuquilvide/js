const cows = 15;

const contCows = new Promise(function (resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} in the farm!`);
    }else{
        reject("There is no cows on the farm");
    }
});

contCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => console.log("Finally"));