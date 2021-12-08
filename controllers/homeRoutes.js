const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

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
        res.render('homepage', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
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

router.get('/post-create', withAuth, async (req, res) => {
    res.render('post');
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    };
    res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: Post}]
        });

        const user = userData.get({ plain: true});

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;