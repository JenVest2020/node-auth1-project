const db = require('../database/db-config');

function add(user) {
    return db('users').insert(user, 'id')
}

function getUsers() {
    return db('users')
}

function findBy(filter) {
    return db("users").where(filter).orderBy("id");
}


module.exports = {
    add,
    getUsers,
    findBy,
}