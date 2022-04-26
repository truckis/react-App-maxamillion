/* CLASS STRUCTURE IN ES7 AND ES7 */


class Human {
    constructor() {
        this.gender = "male";
        this.height = 69;
        this.race = "White"
    }

    // printGender() {
    //     console.log(this)
    // }
}

class Person extends Human {
    constructor() {
        super();
        this.first = "Marcus";
        this.last = "DelBianco"
    }

    // printMyName() {
    //     console.log(this)
    // }
}

const person = new Person();
const human = new Human()
// person.printMyName();
// person.printGender();

// console.log(person)



/*
Properties are like variables attatched to classes/objects
Methods are like functions attatched to classes/objects
 */



// ES7 way of doing Classes...no need for the constructor function

class Human7 {
    gender = "male";
    height = 69;
    race = "White";

    // printGender7 = () => {
    //     console.log(this.gender);
    // }

}


class Person7 extends Human7 {
 
        first = "Marcus";
        last = "DelBianco";

    // printMyName() {
    //     console.log(this)
    // }
}


const human7 = new Human7()
const person7 = new Person7()

console.log(person7)