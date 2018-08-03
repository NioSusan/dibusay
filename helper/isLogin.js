function isLogin(req, res, next) {
    if(req.session.current_user) {
        return next();
    }
    req.flash('error', 'Please Login First!');
    res.redirect('/login');
}

module.exports = isLogin;