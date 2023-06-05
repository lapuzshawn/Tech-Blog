const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../util/auth');

// * Homepage with all posts and comments
// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         const posts = postData.map(
//             (post) => post.get({ plain: true })
//             );
//         // console.log(req.session.logged_in)
        
//         // res.render('homepage', {
//         //     posts,
//         //     logged_in: req.session.logged_in
//         // });

        
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// * Main 
router.get('/', async (req, res) => {
    try {
    res.render('homepage', {
        logged_in: req.session.logged_in
        
    })
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// *** TODO: Additional Routes *** // 
router.get('/post/:id', withAuth, async (req, res) => {
    // TODO 
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
   // TODO
   try {

   } catch (err) {
       console.log(err);
       res.status(500).json(err);
   }
});

router.get('/login', (req, res) => {
    // TODO
    
    res.render('login')
})

router.get('/register', (req, res) => {
    // TODO
    res.render('register')
})

module.exports = router;