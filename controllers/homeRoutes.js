const router = require('express').Router();
const { Post, User } = require('../models');

//matches /
router.get('/', async (req, res) => {
    try{
        // Get all posts
        const postData = await Post.findAll({
            include: [
                {
                    model: User
                }
            ]
        });

        //Serialize data so the template can read it
        const posts = postData.map(post => post.get({ plain: true }));

        res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
    res.send('Hello World');
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User
                }
            ]
        });

        const post = postData.get({ plain: true });

        res.json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    };
    res.render('login');
});

module.exports = router;