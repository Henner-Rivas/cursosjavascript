const products = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const myProducts= [];


const productIndex = products.findIndex(item=> item.id === '🍔');
 
if (productIndex !==-1) {
    myProducts.push(products[productIndex]); 
    newArray = products.filter(item => item != products[productIndex]);}
console.log("Products:",products);
console.log("MyProducts:", myProducts);
console.log("-".repeat(10));
console.log("newArray:",newArray);


const productsV2 = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "delicious",
    },
}



const productIndex2 = productsV2.findIndex(item=> item.id ===  update.id);
 
productsV2[productIndex2]={
    ...productsV2[productIndex2],
    ...update.changes,
};
console.log(productsV2)

//sort

const months=[ 'Julio', 'Diciembre', 'Enero', 'Febrero', 'fsdf' ]

const number=[1,4,7,5,7]

number.sort(a,b=>a-b);
