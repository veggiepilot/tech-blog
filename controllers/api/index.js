const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// Routes

    // /
    // /api/posts
        //POST
        //PUT
        //DELETE
        //GET
    // /api/post/:id
    // /dashboard
    // /signin
    // /signup
    
module.exports = router;
