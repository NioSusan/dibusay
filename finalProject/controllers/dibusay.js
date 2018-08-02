const Food = require('../models').Food;
const Comment = require('../models').Comment;
const Tag = require('../models').Tag;
const Sequelize = require('../models').Sequelize;
const Op = Sequelize.Op

module.exports={
    show : (req, res)=>{
        console.log('NI ADALAH HASIL QUERY' , req.query.search)
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
       let image = req.body.image;
       let description = req.body.description;
       let tags = req.body.tags
       Food.create({
        name : name,
        image : image,
        description : description,
        Tags: tags
       }, {
           include: [Tag]
       })
       .then(newFood=>{

            // newFood.addTags([ 11, 12, 13 ])
            res.redirect('/dibusay')
       })
       .catch(err=>{
           res.send(err.message);
       })
    },

    info : (req, res)=>{
        Food.findById(req.params.id, {include: [Comment]})
            .then(foundFood=>{
                res.render('dibusay/showInfo', {food:foundFood})
            })
            .catch(err=>{
                res.send(err.message);
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
        console.log(req.params)
        Food.findById(id)
            .then(foundFood=>{
                Comment.create({
                    text: req.body.text,
                    author: req.body.author
                })
                .then(comment=>{
                    foundFood.addComment(comment)
                    res.redirect(`/dibusay/${id}`)
                })
            })
    },

    test: (req,res) =>{
        console.log('hhe')
        res.send('hehehe')
    }
    
}