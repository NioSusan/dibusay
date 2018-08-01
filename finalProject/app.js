const express = require('express');
const app = express();

const session = require('express-session');

const indexRoutes = require('./routes/index');
const dibusayRoutes = require('./routes/dibusay');
const authRoutes = require('./routes/auth');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require('express-session')({
    secret : "ninja coder!",
    resave : false,
    saveUninitialized : false
}));

app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes);
app.use(authRoutes);
app.use(dibusayRoutes);


app.listen(3000, () => { console.log("Server has started!!")});