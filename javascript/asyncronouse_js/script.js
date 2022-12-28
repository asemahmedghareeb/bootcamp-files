//eror handling
/*
"use strict";
const variable='asem';
console.log(variable)



const  makeError=()=>{
    try{
        // throw new customError("this is a custome Error");


        //generic error
        // throw new Error("this is an Error");
        const name="asem";
        name="dave"
    }
    catch(err){
        // console.error(err.name)
        // console.error(err.message)
        // console.error(err.stack)

        // console.warn(err)
        // console.table(err)
    }finally{
        console.log("....finally")
    }
}

makeError()


function customError(message){
    this.message=message;
    this.name='custome Error';
    this.stack=`${this.name}:${this.message}`;
}
*/




//promises
//promises is an object that my produce a single value some time in the future
/*
const promise=new Promise((resolved,reject)=>{
    if(true){
        resolved('stuff worked');
    }
    else {
        reject('Error it broke')
    }
})
const promise2=new Promise((revolved,reject)=>{
    setTimeout(revolved,100, 'hi')
})
const promise3=new Promise((revolved,reject)=>{
    setTimeout(revolved,1000, 'POOKIE')
})

const promise4=new Promise((revolved,reject)=>{
    setTimeout(revolved,5000, 'is ti me  you are looking for')
})

Promise.all([promise,promise2,promise3,promise4])
.then(values=>{
    console.log(values)
});

promise
.then(result=>result+'!')
.then(result2=>result2+'?')
.catch(()=>console.log('Error!'))
.then(result3=>{
    console.log(result3 + "!");
})



*/
//fetch api



/*
// console.log(fetch("https://reqres.in/api/users"))

fetch("https://reqres.in/api/users",{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name:'user 1'
    })
}).then(res=>{
    if(res.ok){
        console.log("success")
    }
    else{
        console.log('failed')
    }
    return res.json()
})
.then(data=>console.log(data))
.catch(erorr=>console.log('Error'))

*/



//promises webDevSemplified
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



function watchTutorialCallback(callback, errorCallback) {
    
    if (userLeft) {
        errorCallback({
            name: 'User Left', 
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat' 
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}



// watchTutorialCallback(message=> {
//         console.log(message)
//     },error => {
//             console.log(error.name + ' ' + error.message)
// })

let userLeft = !false
let userWatchingCatMeme = !false
function watchTutorialPromise() {
    return new Promise((resolve,reject)=>{
        if (userLeft) {
            reject({
                name: 'User Left', 
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat' 
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
    
    
}


watchTutorialPromise().then(message=>{
    console.log('success '+message)
}).catch(error=>{
    console.log(error.name+' '+error.message)

})




const recordVideoOne = new Promise((resolve, reject) => {
    setTimeout(x=>{
        resolve('Video 1 Recorded')
    },3000)
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

// Promise.all([recordVideoOne,recordVideoTwo,recordVideoThree])
// .then(messages=>{
//     console.log(messages)
// })

//race return only the first promise done
Promise.race([recordVideoOne,recordVideoTwo,recordVideoThree])
.then(messages=>{
    console.log(messages)
})
