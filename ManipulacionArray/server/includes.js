const pets=['cat','dog','bat'];

let includeArray=false

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element=='dog') {
        includeArray=true;
        break;        
    }
}

console.log(includeArray)

const sa= pets.includes('dog')

//join

const place=['fire','air','water'];

let final='';
const separate= '--'
for (let index = 0; index < place.length; index++) {
    const element = place[index];
    final=final+element+separate;
}
place.join('-')
console.log(includeArray)
console.log(final)

const ttile=' curso de manipulacion de arrays'

const urlfinal=ttile.split(' ').join('-').toLowerCase()

// concat

/* const array2 = ['d', 'e', 'f'];
const newArray= [...array1]; */


for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
const array3 = array1.concat(element);
console.log(array3)
}
 const array1 = ['a', 'b', 'c',[4,7,[4,8]]];

 array1.forEach((element=>{

  
 }))

/*
array1.forEach((element) => {
  const newArray2 = [];

  const dd = newArray2.concat(element);
  dd.forEach((est) => {
    const newArray4 = [];

    const ee = newArray4.concat(est);
    ee.forEach((ultimo) => {
      console.log(ultimo);
    });
  });
});
 */


const rta=[...array1,...array2 ]
console.log(array3);
console.log(newArray);
array2.push(...array3);

const matriz = [
    [1,2,3],
    [4,5,6,[44,45]],
     [7,8,9]
];

const newArray=[];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
         newArray.push(element)
        
    }
}

console.log('for', newArray)
const rts=matriz.flat(3);

console.log(rts);



const arr = [1,2,3, [4,5,6,[3,4],[5,4,[1,[100,200]]]],2,5]

const FLAT = (array) => {
  let newArray = [];

  if(typeof array == "object") {
    array.forEach(element => {
      newArray = newArray.concat(FLAT(element));
    })
    return newArray
 }

  return array;
}

let flatArray = FLAT(arr);

console.log(flatArray);