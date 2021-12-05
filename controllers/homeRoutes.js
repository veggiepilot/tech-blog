const router = require('express').Router();
const { Post, User } = require('../models');

//matches /
router.get('/', async (req, res) => {
    res.send('Hello World');
});

module.exports = router;