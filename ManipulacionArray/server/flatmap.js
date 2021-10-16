const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

/* const rta= users.map(user=> user.attributes).flat()
 */
const rtae=users.flatMap(user=> user.attributes)
console.log(rta)