const router = require('express').Router();
const { response } = require('../api/server');
const db = require('./usersModel');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res, next) => {
    console.log(req.session);
    db.getUsers()
        .then(response => {
            if (req.session) {
                res.status(200).json(response);
            } else {
                next({ apiCode: 401, apiMessage: 'You shall not pass!' });
            }
        })
        .catch(err => {
            next({ apiCode: 500, apiMessage: 'error retrieving users', ...err });
        })
})

module.exports = router;