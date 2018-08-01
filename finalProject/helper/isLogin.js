function isLogin(req, res, next) {
    if(req.session.current_user) {
        return next();
    }
    res.redirect('/login');
}

module.exports = isLogin;