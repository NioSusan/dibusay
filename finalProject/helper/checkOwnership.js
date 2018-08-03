function checkOwnership(req, res, next){
    const Food = require('../models').Food;
    const User = require('../models').User;
    let user = req.session.current_user;
    let id= req.params.id;
    
    Food.findById(id)
            .then(food=>{
                User.findOne({where:{username:user}})
                    .then(user=>{
                        if(food.userId===user.id){
                           next()
                        }else{
                            req.flash("error", "Oops! You're not allowed to do that =)")
                            res.redirect('/dibusay')
                        }
                    })
                 })
}
module.exports= checkOwnership