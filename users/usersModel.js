const db = require('../database/db-config');

async function add(user) {
    return db('users').insert(user, 'id')
}

function getUsers() {
    return db('users')
}


module.exports = {
    add,
    getUsers,
}