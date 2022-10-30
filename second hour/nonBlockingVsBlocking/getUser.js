function getUser(user, callback) {
    setTimeout(callback, 2000);
    return user;
}
module.exports = getUser;
