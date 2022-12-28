//passing by value vs passing by reference
let a=5;
let b=a;
a++;
console.log(a);
console.log(b);


let obj1={name:'yeo',passowrd:'123'}
let obj2=obj1;
obj1.passowrd="easypeasy";
console.log(obj1)
console.log(obj2)

let c=[1,2,3,4,5,6]
//clone array
let x=[].concat(c);
let d=c;
c.push(777);
console.log(d);
console.log(x);

let obj={
    a:'a',
    b:'b',
    c:{deep:'try and copy me'}
};
let objt=obj;
//clone object
//shallow cloning
let clone=Object.assign({},obj);
let clone2={...obj};


//this line convert the obj to stirng and then parse it agian to it's orginal type

//deep cloning
let superClone=JSON.parse(JSON.stringify(obj));

console.log(clone);
console.log(clone2);
console.log(superClone);

obj.c.deep="hahaha";

console.log(clone);
console.log(clone2);
console.log(superClone);

const f=(a)=>a++;
const h=(a)=>a.push(1);
let y=9;
f(y)
let arr=[1,2,3]
h(arr);
console.log(arr)
console.log(y)

//type coercion
console.log(Object.is(-0,+0))
