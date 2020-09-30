const router = require('express').Router();
const { response } = require('../api/server');
const db = require('./usersModel');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res, next) => {
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