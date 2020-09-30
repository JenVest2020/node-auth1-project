const router = require('express').Router();
const users = require('../users/usersModel.js');
const bcrypt = require('bcryptjs');
// const dbConfig = require('../database/db-config.js');

router.post('/register', async (req, res, next) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    try {
        const saved = await users.add(user);
        res.status(201).json(saved);
    } catch (err) {
        next({ apiCode: 500, apiMessage: 'error registering', ...err });
    }


})

module.exports = router;