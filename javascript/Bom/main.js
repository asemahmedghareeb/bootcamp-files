
let txt=document.getElementById('txt');



// if(sessionStorage.length>0){
//     txt.Value=sessionStorage.getItem('txt');
// }
txt.addEventListener("keypress",function(event){
if(txt.Value&&event.which===13){
    localStorage.setItem('txt',txt.Value);
}

})

// txt.onkeyup=function(){
//     sessionStorage.setItem('txt',txt.Value);
// };
