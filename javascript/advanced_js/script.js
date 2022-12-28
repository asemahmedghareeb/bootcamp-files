//scope
// var fun=20;
// function f(){
//     var fun=10;

// }

// fun();
// console.log(fun)


//advanced control flow

//turnary operator
/*
var a=2;

a===2? console.log(a):console.log(a);

var answer= a==2? "right":"wrong";
console.log(answer);

*/

// switch 

/*
var a=3;
switch(a){
    case 3:
        console.log("yes");
        case 3<5:
            console.log("less than five");
    break;
    case 2:
        console.log("no");
    break;

    default:
        console.log("other wise");
    break;
}

*/



// es6

// (1) let and const


/*
const player="bobby";
let experience=100;
let wizardlevel=false;

if(experience>90){
    let wizardlevel=true;
    console.log("inside",wizardlevel)
}

console.log("outside",wizardlevel)
//from we see first let made a new scope inside the if condition

*/


const obj={
    player:"bobby",
    experience:100,
    wizardlevel:false
}
obj.asem="20 years";
obj.experience="ksljfsdlf";

// if we make object with type cost we com add key and values but we can not assign the object name to any other value for example obj="assem";

//destructuring


const Player =obj.player;
const Excerience=obj.experience;
let Wizardlevel=obj.wizardlevel



const {player,experience}=obj;
let {wizardlevel}=obj;
console.log(player+"\n"+experience+"\n"+wizardlevel);


const name="john snow"
const ob={
    [name]:'hello',
    [1+2]:'hihi'
}

const a="simon";
const b=true;
const c={};

//if we want the key and value to be the same we do this 
const obj_={a,a,c}
// this is the old way for doing the previons
obj__={
    a:a,
    b:b,
    c:c
}


//template string

const greating="hello "+ name +" you seem to be doing "+"greating";

const newgreating=`hello ${name} you seem to be doing greating`;


//default arguments
function greet(name=" ",age=30,pet="cat"){
    return`hello ${name} you seem to be ${age-10} . what a lovely ${pet}`;
}


greet("sally")
////////////////////////////////////////////////////
//symbol data type

let syml=Symbol();
let sym2=Symbol('foooo');
let sym3=Symbol('foooo');

sym2="sffskh";
console.log(sym2===sym3)
console.log(sym2);
//symbol in unique in immutable and good for security because it's hide in iteration
const myNewsymbol=Symbol();
const myobject={
    uerName:'oasma elzero',
    website:"elzero.org",
    [myNewsymbol]:"this is hiddne from iteration",
    age:40
}


//symbol never appear in iteration
//iteration over the object using for of
for(let val of Object.entries(myobject)){
    console.log(val)
}

//iteration over the object using for in

for (i in myobject){
    console.log(myobject[i])
}

//printing property name (keys)
console.log(Object.getOwnPropertyNames(myobject))
console.log(Object.keys(myobject))

console.log(JSON.stringify(myobject))

//but we can see the symbol using the two following lines
console.log(Object.getOwnPropertySymbols(myobject))
console.log(myobject)


//for function search first for any symbol that hava description testing and if not it creats new one with this description
// let symbol=Symbol("testing")
const symbol1=Symbol.for("testing")//symbol is not exist create it
const symbol2=Symbol.for("testing")//symbol is created select it
//so this comparision is between the same symbol
console.log(symbol1===symbol2)


//printing the discription of the symbol
console.log(symbol1.description)
console.log(Symbol.keyFor(symbol1))

//converting symbol to string
const stringsymbol=symbol1.toString();
// alert(stringsymbol);









/////////////////////////////////////////////////////
// arrow fumcution

// if the funcution is in one line we use this format
const add=(a,b)=>a+b;

// if the function require more than one line we do this
const add2=(a,b)=>{
    a+=5
    return a+b;
}



