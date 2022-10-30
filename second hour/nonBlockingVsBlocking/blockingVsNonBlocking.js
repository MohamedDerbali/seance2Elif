var scopeBlocking = () =>{
    var getUserSync = require("./getUserSync");
    var user1 = getUserSync('123');
    console.log('user1', user1);
    var user2 = getUserSync('321');
    console.log('user2', user2);
    var sum = 1+2;
    console.log('the sum is', sum);
}

var scopeNonBlocking = () =>{
    var getUser = require("./getUser");
    getUser('123', function(){
        console.log('user1', '123');
    });
    getUser('321', function(){
        console.log('user2', '321');
    });
    var sum = 1+2;
    console.log('the sum is', sum);
}


// scopeBlocking();
scopeNonBlocking();