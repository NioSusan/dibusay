const User = require('../models').User;
const crypto = require('crypto');
module.exports = {
    register : (req, res)=>{
       res.render('auth/register'); 
    },

    signup : (req, res)=>{
        let salt = crypto.createHash('md5').update(req.body.email).digest('hex')
        let combined = req.body.password +salt
        let encryptedPassword = crypto.createHash('md5').update(combined).digest('hex')
        User.create({
            username: req.body.username,
            password: encryptedPassword,
            email : req.body.email,
            salt:salt

        })
        .then(user=>{
            res.redirect('/login')
        })
        .catch(err=>{
            res.send(err);
        })
    },

    loginForm : (req, res)=>{
        res.render('auth/login')
    },

    login : (req, res)=>{
        let salt = crypto.createHash('md5').update(req.body.email).digest('hex') //should be email
        let combined = req.body.password + salt
        let encryptedPassword = crypto.createHash('md5').update(combined).digest('hex')
        User.findOne({where:{
                username: req.body.username, //it should be email
                password: encryptedPassword
        }})
        .then(user=>{
            if(user){
                req.session.current_user = req.body.username
                res.redirect('/dibusay')
            }else{
                res.redirect('/register')
            }
        })
        .catch(err=>{
            res.send('Uh-oh!Something is wrong')
        })
    },

    logout: (req, res)=>{
        req.session.current_user = null;
        res.redirect('/dibusay');
    }
}