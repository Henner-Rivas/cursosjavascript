/* import hello from "../es6/module";

let array=[1,2,3,[4,5,6, [7,8,9]]];

console.log(array.flat(2))

let hello= '  hola jose'
console.log(hello)
console.log(hello.trimStart())
 */
//ES11

const button = document.getElementById("btn");

button.addEventListener("click",async function () {
    const module= await import ("./file.js");
    module.hello();
})

const promise1= new Promise((resolve,reject)=>reject("reject"));

const foo= null ?? 'defaul';

const user={};
console.log(user?.profile?.email);

const string="henner rivas"
const replaced=string.replace("rivas","berrio");

console.log(replaced)
const replaced2=string.replaceAll("henner","jose");

console.log(replaced2)

class Message{
    #show(val){
        console.log(val);
    }
    get #add(){
        
    }
}

Message.show('hola')