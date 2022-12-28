const promise =new Promise((resolve,reject)=>{
    let a= 1+1;
    if(a==2){
        resolve('success');
    }else{
        reject('Failed');
    }
})
let val=2
promise.then(message=>{
    setTimeout(x=>{
        val+=1
        console.log("this is  in the then",message)
    },1000)
}).then(x=>{
    console.log(val)
    console.log('i waited so much for you')
}).catch(message=>{
    console.log('this is in the catch',message)
})
