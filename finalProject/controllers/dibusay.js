const Food = require('../models').Food;
const Comment = require('../models').Comment;
const User = require('../models').User;
const Tag = require('../models').Tag;
// const Models = require('../models');

const Sequelize = require('../models').Sequelize;
const Op = Sequelize.Op

module.exports={
    show : (req, res)=>{
        let where = {}
        if (req.query.search) {
            where = {
                name: {
                    [Op.iLike]: '%'+req.query.search+'%'
                }
            }
        }
        Food.findAll({
            order:[['id', 'ASC']],
            where: where
        })
        .then(foods=>{
            res.render('dibusay/index', {foods: foods, currentUser: req.session.current_user});
        })
        .catch(err=>{
            res.send(err.message);
        })
       
    },

    form :  (req, res)=>{
        res.render('dibusay/new')
    },

    add : (req, res)=>{
       let name = req.body.name;
       let price = req.body.price;
       let image = req.body.image;
       let description = req.body.description;
       let tags = req.body.tags
       let user = req.session.current_user;
        User.findOne({where:{username:user}})
            .then(user=>{
                Food.create({
                    name : name,
                    price : price,
                    image : image,
                    description : description,
                    userId : user.id,
                    Tags: tags
                },{
                    include: [Tag]
                })
                .then(newFood=>{
                    res.redirect('/dibusay')
                })
                .catch(err=>{
                    res.send(err.message);
                })
            })
    },

    info : (req, res)=>{
        Food.findById(req.params.id, {include: [Comment, User]})
            .then(foundFood=>{
                User.findOne({where:{username:req.session.current_user}})
                    .then(user=>{
                        res.render('dibusay/showInfo', {food:foundFood,currentUser:req.session.current_user,currentUserId: user.id})
                    })
            })
            .catch(err=>{
                res.send(err);
            })
    },

    commentForm : (req, res)=>{
        Food.findById(req.params.id)
        .then(foundFood=>{
            res.render("comments/new", {food:foundFood})
        })
        .catch(err=>{
            res.send(err.message)
        })
    },

    addComment : (req, res)=>{
        let id = req.params.id
        Food.findById(id)
            .then(foundFood=>{
                Comment.create({
                    text: req.body.text,
                    author: req.session.current_user
                })
                .then(comment=>{
                    foundFood.addComment(comment)
                    req.flash("sucess","Successfuly added comment")
                    res.redirect(`/dibusay/${id}`)
                })
            })
            .catch(err=>{
                req.flash("error", "Something went wrong")
                res.send(err)
            })
    },   

    editForm: (req, res)=>{
        let user = req.session.current_user;
        let id = req.params.id;
        Food.findById(id)
            .then(food=>{
                User.findOne({where:{username:user}})
                    .then(user=>{
                        if(food.userId===user.id){
                            res.render('dibusay/editForm', {food:food})
                        }else{
                            res.redirect("back")
                        }
                    })
                 })
                 .catch(err=>{
                     res.send(err)
                 })
    },

    update : (req, res)=>{
        let id = req.params.id;
        Food.update({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description
        },{where:{id:id}})
            .then(()=>{
                res.redirect('/dibusay')
            })
            .catch(err=>{
                res.redirect('/dibusay')
            })
    },

    destroy : (req, res)=>{
        let id = req.params.id;
        Food.findById(id).then(food => {
            food.destroy().then(() => {
                req.flash("success", "Food deleted!")
                res.redirect('/dibusay')
            })
        }) .catch(err=>{
            res.redirect('/dibusay')
        })

        // Food.destroy({where:{id:id}})
        //     .then(()=>{
        //         req.flash("success", "Food deleted!")
        //         res.redirect('/dibusay')
        //     })
        //     .catch(err=>{
        //         res.redirect('/dibusay')
        //     })
    },

    test: (req,res) =>{}

}