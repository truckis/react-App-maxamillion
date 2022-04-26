/* SPREAD & REST OPERATORS */


const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers)

const person = {
    name: "Marcus",
    height: 69,
    gender: "Male"
}

const newPerson = {
    ...person,
    age: 30,
    goals: "Fuck Shit Up"
}

console.log(newPerson)


const filter = (...args) => {
    return args.filter(el => el === 3);
}

console.log(filter(1, 2, 3));