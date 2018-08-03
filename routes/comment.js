const router = require('express').Router();
const isLogin = require('../helper/isLogin');
const checkComment = require('../helper/checkComment');

const {editForm, update, destroy} = require('../controllers/comment');

router.use('/dibusay', isLogin);

router.get('/dibusay/:id/comments/:comment_id/edit',checkComment, editForm)
router.post('/dibusay/:id/comments/:comment_id/edit', checkComment,update)
router.get('/dibusay/:id/comments/:comment_id/delete', checkComment,destroy)


module.exports = router;
