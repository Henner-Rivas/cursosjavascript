const number=[1,4,5,8,6,4];

let rta = true;

for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if (element>=40) {
        rta=false;
    }
}

console.log('fro', rta);

const rta3= number.every(item => item <=40);


const orders=[
    {
        customerName:'Nicolas',
        age:60,
    },
    {
        customerName:'Hennner',
        age:20,
    },
    {
        customerName:'Jose',
        age:20,
    }
    ];

    const rta3= orders.every(item => item.age >= 15);
 
    console.log(rta3)