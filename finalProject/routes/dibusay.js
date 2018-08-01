const router = require('express').Router();
const {show, add, form, info, commentForm, addComment} = require('../controllers/dibusay');
const isLogin = require('../helper/isLogin');

router.use('/dibusay', isLogin);

router.get('/dibusay', show);
router.get('/dibusay/new', form);
router.post('/dibusay', add);
router.get('/dibusay/:id', info);

router.get('/dibusay/:id/comments/new', commentForm);
router.post('/dibusay/:id/comments', addComment);

module.exports = router;