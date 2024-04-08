

console.log("before")
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'promise 1');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'promise 2');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'promise 3');
});

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("promise all:", values); // ['foo', 'bar', 'baz']
    });

new Promise((resolve) => {
    const name = () => {
        console.log(4)
    }
    name()

    resolve(5)


    console.log(6)

}).then((res) => console.log("resolve", res))



Promise.race([promise1, promise2,]).then((value) => {
    console.log("race result:", value);
    // Both resolve, but promise2 is faster
});