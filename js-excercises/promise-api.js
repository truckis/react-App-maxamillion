/* This will go over how to structure code when 
running promises in parrellel, like calling two APIs
at the same time */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation 1...')
        resolve(1);
    }, 1000)
});



const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Operation 2...')
        resolve(2);
    }, 1000)
});

Promise.all([p1, p2]) //This gets both resolved promises
    .then(result => console.log(result));


  