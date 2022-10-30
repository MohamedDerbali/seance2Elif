//javascript doesn't block methods execution, it works under the SJF {short job first} principle 
//in this case we have the respond method that takes 1 second to execute, but the greet method is executed first because it takes less time to execute

function greet(name) {
    console.log('Hello ' + name);
    return name;
}
function respond(){
    return setTimeout(function(){
        console.log('hey');
        return 'hey';
    }, 1000);
}


respond();
greet("oussema");