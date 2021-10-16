const words=['spray','limit','elite','tomate']

const  newArray=[]
for (let index = 0; index < words.length; index++) {
    const element = words[index];
        if (element.length>= 6) {
            newArray.push(item);
        }
}

console.log(newArray);

console.log("original"+words);

const rta=words.filter(item=> item>=6)

console.log("rta"+rta);
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

    const rta2= orders.filter(item=> item.delivered && item.total >=50
          )

const search=(query)=>{
    return orders.filter(item=> {
        return item.customerName.includes(query);

    })

}
console.log(search('o'))