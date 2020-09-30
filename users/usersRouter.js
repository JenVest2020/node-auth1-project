const router = require('express').Router();
const { response } = require('../api/server');
const db = require('./usersModel');

router.get('/', (req, res, next) => {
    console.log(req.session);
    db.getUsers()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            next({ apiCode: 500, apiMessage: 'error retrieving users', ...err });
        })
})

module.exports = router;