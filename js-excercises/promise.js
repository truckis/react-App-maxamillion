

const p = new Promise((resolve, reject) => {
// Kick off some async work
setTimeout(() => {
    resolve(1);
    reject(new Error('message'))
}, 2000)

 // Going t use tghis to send to the consumers of this Promise
// reject(new Error('message'))

})

// Result is from resolve()
p.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message))