const express = require('express');
const router = express.Router();

//@route     GET api/contacts
//@desc      get all users contacts 
//@access    Private 

router.get('/', (req, res) => {
    res.send('get all contacts ');
});

//@route     POST api/contacts
//@desc      add new contact
//@access    Private 

router.post('/', (req, res) => {
    res.send('add new contact');
});

//@route     PUT api/contacts/:id
//@desc      Update contacts
//@access    Private 

router.put('/:id', (req, res) => {
    res.send('update contacts ');
});

//@route     DELETE api/contacts
//@desc      Delete contacts 
//@access    Private 

router.delete('/:id', (req, res) => {
    res.send('delete contacts');
});


module.exports = router;