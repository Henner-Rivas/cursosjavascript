const numbers=[1,4,5,8,7];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element===8) {
        rrt=element;
        break;
    }
}

console.log('for',rrt);

const rta2=numbers.find(item=> item==30)

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rta2=products.find(item=> item.id==='🥞')
  const rta3=products.findIndex(item=> item.id==='🥞')

  console.log(rta2)
  console.log(rta3)