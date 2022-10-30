console.log("start");
const interval = setInterval(() => {
    console.log('setInterval');
}, 1000);
console.log("end");
setTimeout(() => {
    clearInterval(interval);
}, 10000);
// setInterval is a function that takes a function as a parameter and a time in milliseconds which is an asynchrounous function
// it means that it will execute the function after the time specified in milliseconds
// the function passed as a parameter will be executed in the event loop
// the event loop is a queue that contains all the functions that will be executed in the future
// the difference between setInterval and setTimeout is that setInterval will be executed after the time specified in milliseconds and it will be executed again and again
// the event loop is a queue that contains all the functions that will be executed in the future
