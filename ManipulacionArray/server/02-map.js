const letter= ['a','b','c'];



/* for (let index = 0; index < letter.length; index++) {
    const element = letter[index];
    newArray.push(element+ '++')
}

 */

const newArray= letter.map(item=> item + '++')
console.log('new ',newArray);