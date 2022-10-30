console.log("start");
setTimeout(function(){
 add();
} , 1000);
console.log("end");

//setTimeout is a function that takes a function as a parameter and a time in milliseconds which is an asynchrounous function 
//it means that it will execute the function after the time specified in milliseconds
//the function passed as a parameter will be executed in the event loop
//the event loop is a queue that contains all the functions that will be executed in the future


function add(){
console.log('added successfully');
}
// <=>
// const add = () => {

// }