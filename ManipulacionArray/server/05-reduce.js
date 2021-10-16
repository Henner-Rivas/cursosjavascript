const totales= [1,2,4,5]

/* 
for (let index = 0; index < totales.length; index++) {
    const element = totales[index];
    sum=sum+element;
} */
let sum=0;


const rta= totales.reduce((sum,item)=> sum+item,0);

console.log(rta);

//reduce reloaded

const items=[1,7,2,5];

const rta4= items.reduce((obj,item)=>{
if (item < 5) {
    obj["1-4"] +=1; 
}else if(item > 5 && item<9){
    obj["5-8"]+=1;
}
return obj

},{"1-4":0,
    "5-8":0})

console.log(rta4)

const data=[
{
    name:'Nicolas',
    lavel:'low',
},
{
    name:'Andrea',
    level:'Medium',
},
{
    name:'Pola',
    level:'higth',
},
{
    name:'Henner',
    level:'Medium',
}
];

const levelCount= data.map(item => item.level)
   .reduce((obj,item)=>{
    if (!obj[item]) {
        obj[item]=1; 
    }else{
        obj[item]=obj[item]+1;
    }
    return obj;
    
    },{}) 

console.log(levelCount)

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
console.log(rta)