const express = require('express');
const router = express.Router();

//@route : GET api/contacts
//@desc  : Get user contacts
//@access: Private
router.get('/', (req, res) => {
    res.send('Get user contacts');
});

//@route : POST api/contacts
//@desc  : Add user contacts
//@access: Private
router.post('/', (req, res) => {
    res.send('Add user contacts');
});

//@route : PUT api/contacts/:id
//@desc  : Update user contacts
//@access: Private
router.put('/:id', (req, res) => {
    res.send('Update user contacts');
});

//@route : Delete api/contacts/:id
//@desc  : Delete user contacts
//@access: Private
router.delete('/:id', (req, res) => {
    res.send('Delete user contacts');
});

module.exports = router;