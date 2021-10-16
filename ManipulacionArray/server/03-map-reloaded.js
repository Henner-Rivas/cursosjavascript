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

const rest=  orders.map(item=> item.total)


/* const rest2=  orders.map(item=>
   { 
    
    item.tax=.19;
return item   

}
)
console.log(rest2) */
const rest3=  orders.map(item=>
    {    
 return {
     ...item,
     tax:19
 }   
 
 }
 )
 console.log(rest)

 console.log(orders)
 console.log(rest3)
