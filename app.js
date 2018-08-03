const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

const indexRoutes = require('./routes/index');
const dibusayRoutes = require('./routes/dibusay');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comment');

app.locals.moment = require('moment');
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(flash());
app.use(require('express-session')({
    secret : "ninja coder!",
    resave : false,
    saveUninitialized : false
}));

app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use(authRoutes);
app.use(dibusayRoutes);
app.use(commentRoutes);



app.listen(process.env.PORT || 5000);
