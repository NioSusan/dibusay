const routes = require('express').Router();
const {register, signup, loginForm, login, logout} = require('../controllers/auth');

//SIGN UP
//show register form
routes.get('/register', register);
//sign up
routes.post('/register', signup);

//LOGIN
//show login form
routes.get('/login',  loginForm);
//login
routes.post('/login', login);

//LOGOUT
routes.get('/logout', logout);

module.exports = routes;