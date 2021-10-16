let numbers= [1,2,3,4];

if(numbers.includes(7)){
    console.log('si se encuentra el valor 7');
}else{
    console.log('no se encuentra el valor ');

}

let base=4;
let exponent=3;

let result= base**exponent;

console.log(result)

/// es8

const data={
    frontend:'Oscar',
    backend:'Isabel',
    design:'Henner',
}

const entries=Object.entries(data)
console.log(entries)
console.log(entries.length)


const data={
    frontend:'Oscar',
    backend:'Isabel',
    design:'Henner',
}

const values=Object.values(data); //areglos con los values
console.log(values.length)

const string='hello'
console.log(string.padStart(8,'ey '))
console.log(string.padEnd(10,'jose '))
 
//Async and await 

const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ?setTimeout(() => resolve(console.log('hello world')), 1000)
        :reject(new Error('Test Error'))
    })
};

const helloAsusc= async ()=>{
    const hello=await helloWorld();
    console.log(hello);

}

// ES9

const obj9={
    frontend:'Oscar',
    backend:'Isabel',
    design:'Henner',
}

let {name,...all}=obj9;

console.log(all)


const obj10={
    frontend:'Oscar',
    backend:'Isabel',
}

const obj9={
    ...obj9,
    design:'Henner',
}

const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ?setTimeout(() => resolve(console.log('hello world')), 1000)
        :reject(new Error('Test Error'))
    })
};

helloWorld()
    .then(response=> console.log(response))
    .catch(error =>console.error(error))
    .finally(()=>{
        console.log("Finalida")
    })

