const withAuth = (req, res, next) => {
    // If user isntt logged in, redirect to login
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
