const Comment = require('../models').Comment;

function checkComment(req, res, next){
    const comment_id = req.params.comment_id;
    const currentUser = req.session.current_user;
    Comment.findById(comment_id)
        .then(comment=>{
            if(comment.author===currentUser){
                next();
            }else{
                req.flash("error", "You don't have permission to do that!")
                res.redirect("/dibusay")
            }        
        })
}

module.exports = checkComment;