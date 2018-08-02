const Food = require('../models').Food;
const Comment = require('../models').Comment;
const User = require('../models').User;

module.exports={
    editForm : (req,res)=>{
        Comment.findById(req.params.comment_id)
            .then(comment=>{
                res.render('comments/edit', {id : req.params.id, comment:comment})
            })
            .catch(err=>{
                res.send(err);
            })
        
    },
    update : (req,res)=>{
        Comment.update({
            text : req.body.text
        },{where:{id:req.params.comment_id}})
            .then(()=>{
                res.redirect(`/dibusay/${req.params.id}`);
            })
            .catch(err=>{
                res.redirect(back);
            })
    },

    destroy : (req, res)=>{
        Comment.destroy({where:{id:req.params.comment_id}})
            .then(()=>{
                res.redirect(`/dibusay/${req.params.id}`)
            })
            .catch(err=>{
                res.redirect(back);
            })
    }
    
}