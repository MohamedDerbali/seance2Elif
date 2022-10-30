console.log("start");
const timeOut = setTimeout(() => {
  console.log("timeout");
}, 1000);
console.log("end");
clearTimeout(timeOut);
