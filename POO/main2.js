const juan = {
    name: "jaunito",
    age: 18,
    approvedCourses: ["curso 1"],
    addCourse(newCourse) {
      console.log("this sera", this);
      console.log("this.approvedCourses sera", this.approvedCourses);
      this.approvedCourses.push(newCourse);
      
    }
  };

/*   juan.name
  juan.addCourse("cursos2") 
  Object.entries(juan)[3]

 Object.seal(juan);
 Object.freeze(juan);

console.log(Object.keys(juan)) 
 console.log(  Object.getOwnPropertyNames(juan))
 console.log( Object.entries(juan))  */
 console.log(Object.getOwnPropertyDescriptors(juan));

 Object.defineProperty(juan,"navigator", {
  value:"chrome",
  writable:false,
  enumerable:true,
  configurable:true,
})
Object.defineProperty(juan,"editor", {
  value:"VSCode",
  writable:true,
  enumerable:false,
  configurable:true,
})
Object.defineProperty(juan,"Terminal ", {
  value:"VSCode",
  writable:true,
  enumerable:true,
  configurable:false,
})

Object.defineProperty(juan,"pruebaNasa", {
  value:"extraterestres",
  writable:true,
  enumerable:true,
  configurable:true,
})

const obj1={
 a:"a",
 b:"b",
 c:{
   d:"d",
   h:"h"
 }
};
/* 
const obj2=JSON.stringify(obj1);

const obj3= JSON.parse(obj2); */
//deepCopy
function isObject(subject){
return typeof subject==="object";

}
function isArray(subject){
  return Array.isArray(subject);
  
}

function deepCopy(subject){
  let copySubject;
  const subjectIsArray= isArray(subject);
  const subjectIsObject= isObject(subject);
  if(subjectIsArray){ 
    copySubject=[];
  }else if (subjectIsObject){
    copySubject={};
  }else{
    return subject;
  }
  for (const key in subject) {
      const keyIsObject = isObject(subject[key]);
      if (keyIsObject) {
        copySubject[key]=deepCopy(subject[key]);

      }else{
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        }else{
          copySubject[key]=subject[key];
        }

      }
    
  }

  return copySubject;
}



/* for (prop in obj1) {
  obj2[prop]=obj1[prop];
}
const obj3=Object.create(obj1); */

/* function recursiva(){
  if( validacion  ){
 //llamados recursivos
  }else{
    //llamados , sin recursividad
  }
} */
/* function recursiva(){
  if( validacion  ){
 //llamados recursivos
  }else{
    //llamados , sin recursividad
  }
} */


const numeritos=[0,1,2,3,4,9,5,6];

let numerito=0;

/* for (let index = 0; index < numeritos.length; index++) {
  numerito=numeritos[index]
  console.log({index,numerito})
}

function recursiva(numberArray){
  if(numberArray.length !=0  ){
    const firstNumber=numberArray[0];
    console.log(firstNumber)

    numberArray.shift();
     recursiva(numberArray); 
  }else{
    //llamados , sin recursividad
  }
} 

 


function deepCopy(Subject){
  let copySubject;
  if(numberArray.length !=0  ){
    const firstNumber=numberArray[0];
    console.log(firstNumber)

    numberArray.shift();
     recursiva(numberArray); 
  }else{
    //llamados , sin recursividad
  }
} 
*/