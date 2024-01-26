async function myAsyncFunction(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve("This is another message");
        }, 2000);
    });
}
async function myDisplay(){
    let mypromise=new Promise(function(resolve){
    setTimeout(function(){
    resolve("Like");
    }, 3000);
});

const [result1,result2] = await Promise.all[mypromise, myAsyncFunction()];
console.log(result1);
console.log(result2);
}

myDisplay();

