//advanced loops
const  basket=['apples','oranges','grapes'];

const detiledBasket={
    apples:5,
    oranges:10,
    grapes:1000
}

basket.forEach(e=>{
    console.log(e)
})
console.log('\n')

//iterating -arrays and string (itrables)
//dont work for objects
for(item of basket){
    console.log(item)
}

for(item of "asem"){
    console.log(item)
}

console.log('\n')

//enumrating-object not iterating (enumrables)
// for in work in array also
for(item in detiledBasket){
    console.log(item)
}
console.log('\n')

//debugging
const flattened=[[0,1],[2,3],[4,5]].reduce((accumulator,arr)=>{
    debugger;
    return accumulator.concat(arr)
},[])


console.log(flattened)
