//reference type
var obj1={value:10};
var obj2=obj1;
//obj1 and obj2 now value is reference the same value in the memory
console.log(obj1===obj2);

//so if we changed the value of any of them the other object value changed to the same thing
obj1.value=100;
console.log(obj2.value)


//if we make new object and assign to it the same value and then compare him with obj1 or obj2 it say false because they are not referencing the same  value in the memory
var obj3={value:10};
console.log(obj1===obj3);

//context vs scope
//this here is equal to window object
//this is quale to the object which it is inside 
console.log(this)
const obj4={
    a:function(){
        //this here is equal to obj4 
        console.log('I am obj4',this)
    }
}
obj4.a()
//instantiation
class Player{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }

    introduce(){
        console.log(`Hi I am ${this.name},i'm a${this.type}`)
    }
}


class Wizard extends Player {
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`weee i'm a ${this.type}`)
    }
}

Wizrd1=new Wizard("shellY","healer");
Wizrd2=new Wizard("shawn","dark magic");

Wizrd1.introduce();