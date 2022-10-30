console.log("start");
setTimeout(() => {
    add1();
}, 0);
setImmediate(function () {
  add();
});

console.log("end");
//setImmediate is a function that takes a function as a parameter which is an asynchrounous function
//it means that it will execute the function after the time specified in milliseconds
//the function passed as a parameter will be executed in the event loop
//the event loop is a queue that contains all the functions that will be executed in the future
//the difference between setImmediate and setTimeout is that setImmediate will be executed before setTimeout
//the event loop is a queue that contains all the functions that will be executed in the future

const add = () => {
  console.log("added successfully");
};
const add1 = () => {
  console.log("added successfully setTimeout");
};
