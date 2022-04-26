/* USING THE ARRAY FUNCTION */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const numbers = [1, 2, 3, 4];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
})

console.log(doubleNumArray)

const randomizeArray = numbers.map((num) => {
   if(num % 2 == 0){
       return num * 2
   }else{
       return Math.floor(Math.random() * 100) * num;
   }
})

console.log(randomizeArray)



/* The find() method returns the first element in the provided array that 
satisfies the provided testing function. If no values satisfy the testing function,
 undefined is returned. */
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found)



/* The filter() method creates a new array with all elements that pass the test implemented by the provided function. */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);