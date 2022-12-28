/*
function hello(){
    console.log("hello");
}

//this only happen if the funcution is delaration and the variables of type var not let
window.hello();

var x=10;
console.log(window.x);


*/


///////////////////////////////////////////////////////////
// scroll
/*
scroll({
    left:200,
    top:200
})

//this is the short hand
window.scroll(300,300)
//do the same
scrollTo(50,400)

// this add 20 px to the x axis and 100 to the y axis in the scroll bar
scrollBy(20,100);

console.log(scrollY)
console.log(scrollX)




*/
////////////////////////////////////////////////////
//scroll button

/*
let btn=document.getElementById("btn");

window.addEventListener("scroll",function(){
    if(scrollY>=400){
        btn.style.display='block';
    }
})


window.onscroll=function(){
    if(scrollY >=400){
        btn.style.display="block"
    }
    else{
        btn.style.display="none"
    }
}

btn.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    });

}
*/


////////////////////////////////////////////////////////

//screen

/*
console.log(screen.width)
console.log(screen.height)

console.log(screen.availWidth)
console.log(screen.availHeight)

console.log(screen.colorDepth)
console.log(screen.pixelDepth)

console.log(screen.orientation.type)

*/


//////////////////////////////////////////////

//location object

/*


// console.log(window.location.href)

// location.href='https://fb.com'

console.log("protocol",location.protocol)
console.log("host ",location.host)

// location.hostname="asem"
console.log("path ",location.pathname)
// location.pathname="asem/desktop"
console.log("port ",location.port)

// history.back()
// history.forward()

// location.reload()

//this make you go to another site and save your data  and you can retrun again
location.assign("https://www.google.com.eg/")

// this make you go to another site but not allow to you to return again and doesn not save your data
location.replace("https://www.google.com.eg/")

*/


//////////////////////////////////////////////////////

//setTime setInterval

/*


// setTimeout(() => {
//     console.log('hi')
    
// }, 5000);
let hi=setTimeout(function() {
    console.log('hi')
    
}, 2000);

//this funcution stop the setIimeout funcution only take the function name
clearTimeout(hi);

var i=0;
let setIervaL=setInterval(function(){
    
    console.log(i++)
    if(i==10){

        clearTimeout(setIervaL)
    }
},1000)



//settimeout happen only one time but  setinterval will repeate for ever

*/


// local storage  session storage

// local storage 5mb to 10 MB
// session storage 5 MB

// adding data in local storage
// localStorage.setItem("name","asem");
// localStorage.name="asem ahmed";

// by default every thing in local storage store as string we use json.stringfy and  json.parse to solve this problem
// localStorage.setItem('skills',JSON.stringify(["swimming","leaning","football"]));
// localStorage.user=JSON.stringify({'name':'asem','age':20});
// localStorage.setItem('age',JSON.stringify(20))

// reading from local storage
// console.log(localStorage.getItem('name'))
// console.log(localStorage.name)
// console.log(typeof JSON.parse(localStorage.age) )
// console.log(typeof JSON.parse(localStorage.getItem('skills')) )
// console.log(typeof JSON.parse(localStorage.user) )

// this is good when looping through the local storage
// console.log(localStorage.key(0))


// deleting from loacal storage
// deleting an key from local storage

// localStorage.removeItem("skils");

//deleting all the local storage 
// localStorage.clear();

// the same thing is in session storage  but the diffirence that the local storage save the data until you delete it but the session storage sava the data until you close the tab

localStorage.clear()
let text=document.getElementsByTagName('input');

console.log(text)

text.onkeyup=function(){
    localStorage.t=text.Value;
};

if(localStorage.length>0){
    txt.Value=localStorage.getItem("t");
}

// localStorage.clear();