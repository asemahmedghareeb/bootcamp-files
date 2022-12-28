/*


console.log("hi","there")


function sayHello(){
    console.log("Hello");
}

// annoymous function 
var sayBye =function(){
    console.log("Bye");
}

function sing(song){
    console.log(song)

}


function multibly(a,b){
    return a*b
}

sayHello();
sayBye();

sing("LAA DEE DAAA");
multibly(7,2);

// arrays

var list=["lion","tiger","monkey"]


console.log(list.shift());
var list2=["bird","tree"]
var newList=list.concat(list2);

console.log(newList);


newList.splice(2,1,"assem","ahemd","ghareeb");
console.log(newList);

//object
var user={name:"john",
age:34,
hobby :"soccer",
isMarried:false,
spells:["abraKadabra"]
,shout:function(){
    console.log("AHHHHHH1");
}
}

user.age
console.log(user.hobby);

//adding in object
user.favouriteFood="spinach";
console.log(user.shout())

user.isMarried=true;

*/

/*
//facebook demo






var database=[
    {
        username:"asem",
        password:"123"
    },
    {
        username:"sally",
        password:"123"
    },
    {
        username:"ingrid",
        password:"123"
    }
];


var newsfeed=[
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}

];

var PromuserName=prompt("what's Your user Name");
var prompassword=prompt("what's your passowrd");


function isUserValid(user,pass){
	for(var i=0;i<database.length;i++){
		if(user===database[i].username && pass===database[i].password)
		{
			return true;
		}
	};
	return false;
}

function signIn(username,password){
	if(isUserValid(username,password)==true){
		console.log(newsfeed);
	}
	else {
		alert("wrong username or password")
	}
}




signIn(PromuserName,prompassword)

*/

//string interpolation
// let x=20
// console.log(`${1} asem is ${x} years old`);


/*

//loops

var todo=[
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

for(var i =0;i<todo.length;i++){
	todo[i]+="!";
}
for(var i =0;i<todo.length;i++)
	console.log(todo[i])
var counter=0;

// while(counter<10)
// {
// 		console.log(counter);
// 		counter++;
// }

//do while
var counter2=10;
do {
	console.log(counter2);
	counter2--;
}while(counter2>0)


//foreach
todo.forEach(function(item,indx,i) {
	console.log(item,indx,i)

});

function logTodos(todo,i){
	console.log(todo,i);
}
todo.forEach(logTodos)


arr=[11,22,33,44]
arr.forEach(logTodos) 

// todo.forEach(element => {
// 	console.log(element)

// });


*/


//dom
// document.getElementsByTagName("h1")
// document.getElementsByClassName("second")
// document.getElementById("first")
// document.getElementsByClassName("second")[0]


// document.querySelector("h1")
// document.querySelector("li")
// document.querySelectorAll("li")
// document.querySelectorAll("li,h1")


// document.querySelector("li").getAttribute("random");
// document.querySelector("li").setAttribute("random","1000");
// document.querySelector("li").getAttribute("random");

// var r=document.querySelector("h1").style;
// document.querySelector("h1").style.background="yellow"

//adding new class

var h1=document.querySelector("h1");
h1.className="CoolTitle";

//getting the text value of the tag
var value=document.querySelector("h1").textContent;

//changing the text value of the tag
document.querySelector('h1').textContent="asem";
//console.log(h1.textContent);

/*
//displaying element class
document.querySelector("li").classList;

document.querySelector("li").classList.add("CoolTitle");

document.querySelector("li").classList.remove("CoolTitle");
document.querySelector("li").classList.add("done");

//toggle is like on and off in first time is remove done class and in second it return it again
document.querySelector("li").classList.toggle("done");


document.querySelector("li").classList.toggle("done");


document.querySelector("h1").innerHTML="<strong>!!!</strong>"


document.querySelectorAll("li")[1].parentElement.parentElement;
document.querySelectorAll("li")[1].parentElement.children;

*/



//dom events


var button=document.getElementsByTagName("button")[0];
// click mouseenter mouseleave
// button.addEventListener("mouseleave",function(){

// 	console.log("click")
// })


var  input=document.getElementById("userinput");
var btn=document.getElementById("enter");
var ul=document.querySelector("ul")


function inputLenght(){
	return input.value;
	
}

function CreateListElement(){
	var li =document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	input.value=""

	//adding buttons to new list items
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode('delete'));
	li.appendChild(btn) 
}




input.addEventListener("keypress",function(event){
				  //envent.keycode do the same
				  //13 is the (enter button) key number
	if(inputLenght()&&event.which===13){
		CreateListElement();
	}

})



function addListAfterClick(){
	if(inputLenght()){
		CreateListElement();
	}
}


function addListAfterKeypress(event){
	if(inputLenght()&&event.keyCode===13){
		CreateListElement();
	}
}



btn.addEventListener("click",addListAfterClick)
// btn.addEventListener("keypress",addListAfterKeypress)

// document.querySelector("li").classList.toggle("done");


//toggling done class
function ev(x){

	x.addEventListener("click",function(){
		x.classList.toggle('done')
	})
}


var x=document.getElementsByClassName("x");
for(var i=0;i<x.length;i++){
	ev(x[i])
	}



// creating buttons
for(var i=0;i<x.length;i++){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode('delete'));
	x[i].appendChild(btn) 

}


//deleting list items
// for(var i=0;i<x.length;i++){
// 	var element=x[i].lastChild;
	
// 	r(element,i)
// }
// 	function r(element,i){

// 		// var element=x[1].lastChild;
// 		element.addEventListener('click',function(){
// 			x[i].remove();
// 		})
// 	}


var btns=document.getElementsByTagName("button")
var lis=document.getElementsByTagName('li')
for(var i=0;i<lis.length;i++){
	lis[i].classList.toggle(String(i))
}
for(var i=0;i<x.length;i++){
	console.log(lis)
	e(i)
}

function e(i){

	btns[i+1].addEventListener('click',function(){
		lis[i].remove();
	})
	
}