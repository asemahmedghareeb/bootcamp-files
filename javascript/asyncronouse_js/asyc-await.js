function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to ${location}`);
        if(location==='google'){
            resolve('google says hi');
            
        }
        else{
            reject('we can only talk to google');

        }
        
    })
}
function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('processing response')
        resolve(`Extra information ${response}`)
    })
}
async function doWork(){
    try{
        const response=await makeRequest("google");
        console.log('response recieved');
        const processdResponse=await processRequest(response);
        console.log(processdResponse);
    }catch(err){
        console.log(err)
    }
}

doWork();

// makeRequest('google').then(response=>{
//     console.log('response received');
//     return processRequest(response)
// }).then(processResponse=>{
//     console.log(processResponse)
// }).catch(err=>{
//     console.log(err)
// })