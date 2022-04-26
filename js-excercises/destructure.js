/* DESTRUCTURING
Easily extract array variables or object properties and store them in variables
*/

const numbers = [1, 2, 3, 4, 5];
[num1, num2, , , num5] = numbers

console.log(num1, num2, num5)


/* REFERENCE AND PRIMITIVE TYPES
    When you reassign a value you copy the pointed, not the actual value. 
    Using Reference actually copies the original data
*/

const person = {
    name: "Max"
};

const secondPerson = {
    ...person 
}

person.name = "Manu"

console.log(person)
console.log(secondPerson)