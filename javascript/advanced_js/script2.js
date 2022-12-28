// closures
// const first = ()=>{
//     const geert ='hi';
//     const second=()=>{
//         console.log(geert);
//     }
//     return second;
// }

// const nenwFuc=first();
// nenwFuc();




//carrying
// it is the prosses of convering the function that take multible arguments to funcution that take one arguments at a time

/*
const multiply=(a,b)=>a*b;
const curriedMultibly=(a)=>(b)=>a*b;
console.log(curriedMultibly(3));//b()=>a*b
console.log(curriedMultibly()(1));//NaN
console.log(curriedMultibly(3)(3));
// here mutilblyBy5==(b)=>a*b;
const multiblyBy5=curriedMultibly(5);
console.log(multiblyBy5(8));

*/


//compose
//is passing function praameter to another function inside it
const compose=(f,g)=>(a)=>f(g(a));
const sum=(num)=>num+1;
console.log(compose(sum,sum)(5))
//(sum,sum)=>(5)=>sum(sum(5))
//(sum,sum)=>(5)=>sum(6)
//(sum,sum)=>(5)=>7



// advanced Arrays
const array=[1,3,4,5,6];
const double=[]
array.forEach(num=>{
    double.push(num*2);
});
console.log('foreach',double);
//map, filter, reduce

const mapArray=array.map(num=>num*3);

console.log( 'map',mapArray);


//filter
const filteraArray=array.filter(num=>num>=5);
console.log('filter',filteraArray)

let str='hello world';
a=str.split(" ");

const f=a.filter(word=> word=='hello');
console.log(true)

//reduce
//first parameter in the funcution is called accmualater which we store the value of reduce function in

//the second is the initial value of the accmulater
const reduceAarray=array.reduce((acc,num)=>acc+num,0)

console.log('reduce',reduceAarray);
// const x=[1,2,3,4,5,6];
// var output="";
// x.forEach(item => {
//     output+=(item)+" "
// });
// console.log(output)
