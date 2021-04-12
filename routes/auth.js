const express = require('express');
const router = express.Router();

//@route : GET api/auth
//@desc  : Logged in user
//@access: Private
router.get('/', (req, res) => {
    res.send('Register a user');
});

//@route : POST api/auth
//@desc  : Authenticate a user and get token
//@access: Public
router.post('/', (req, res) => {
    res.send('Logged in user');
});

module.exports = router;
