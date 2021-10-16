const numbers=[1,2,4,7];

let rta=false;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2==0) {
        rta= true;
        break;
    }
}

console.log(rta);

const rta2=numbers.some(item=> item % 2==0);

console.log('rta2'+rta2)

const orders=[
    {
        customerName:'Nicolas',
        total:60,
        delivered:true,
    },
    {
        customerName:'Hennner',
        total:10,
        delivered:true,
    },
    {
        customerName:'Jose',
        total:20,
        delivered:false,
    }
    ];


    const orders=orders.some(item=> item.delivered);

    const dates = [
        {
          startDate: new Date(2021, 1, 1, 10),
          endDate: new Date(2021, 1, 1, 11),
          title: "Cita de trabajo",
        },
        {
          startDate: new Date(2021, 1, 1, 15),
          endDate: new Date(2021, 1, 1, 15, 30),
          title: "Cita con mi jefe",
        },
        {
          startDate: new Date(2021, 1, 1, 20),
          endDate: new Date(2021, 1, 1, 21),
          title: "Cena",
        },
      ];

      