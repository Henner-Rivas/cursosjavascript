
//Default Params y Concatenación
    function newFunction(name,age,country) {
    let name= name || 'oscar';
    let age= age || 32;
    let country= country || 'MX';
    console.log(name,age,country);


}
//es6

function newFunction2(name='oscar',age=20,country='col') {
    
    console.log(name,age,country);

}
newFunction2();
newFunction2('Ricardo','23','COL');

let hello='hello';
let world='hello2';
let epicPhrase= hello+ ''+ world;
console.log(epicPhrase);

let epicPhrase2=`${hello} ${world}`

let lorem= ` una frace epica  
 otra frace equica 
`
console.log(lorem)

let person={
    'name':'oscar',
    'age':32,
    'country':'MX'

}
console.log(person.name)

let {name,age}=person;
console.log(name,age);

let team1=['Oscar', 'Julian', 'Rivardo']
let team2=['Varia', 'wilvr', 'ever']

let education=['davi',...team1,...team2]
console.log(education)

let name='hener',
   age=32;

obj1={
    name:name,age:age
};
//es6
obj2={
    name,age
}
console.log(obj2)

const names=[
    {name:'Henner',age:'22'},
    {name:'yesica',age:'21'}

] 

let listNames=names.map(function (item) {
    console.log(item.name)
})

let listNames2=names.map(item => console.log(item.name))

const listNames3=(name,age,country)=>{

}

const listNames4=name =>{

}

const square= num=>num*num; console.log(square(4))

//promesas podemos trabajasr el asincronismo 

const helloPromise=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('hey')
        }else{
            reject('ups')
        }

    })

}

helloPromise()
.then(response=>console.log(response))
.then(()=>console.log('hola')  )
.catch(error=> console.log(error))

// clases, modulos y gneradores

 class calulator{
    constructor(){
        this.ValueA=0;
        this.ValueB=0;
    }

   sumar(ValueA,ValueB){
       this.ValueA=ValueA;
       this.ValueB=ValueB;
       return this.ValueA+this.ValueB;
   } 
}

const calt = new calulator();

console.log(calt.sumar(2,4))

import hello from "./module";

hello();

function* helloWorlk() {
    if (true) {
        yield 'hello';

    }
    if (true) {
        yield 'world'
    }
}

const generotor= helloWorlk();

console.log(generotor.next().value)
console.log(generotor.next().value)

