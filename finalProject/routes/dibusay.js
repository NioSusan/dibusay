const router = require('express').Router();
const {show, add, form, info, commentForm, addComment, editForm, update, destroy} = require('../controllers/dibusay');
const isLogin = require('../helper/isLogin');
const checkOwnership = require('../helper/checkOwnership');

router.use('/dibusay', isLogin);

router.get('/dibusay', show);
router.get('/dibusay/new', form);
router.post('/dibusay', add);
router.get('/dibusay/:id', info);

router.get('/dibusay/:id/comments/new', commentForm);
router.post('/dibusay/:id/comments', addComment);

router.get('/dibusay/:id/edit', editForm);
router.post('/dibusay/:id/edit', checkOwnership, update);

router.get('/dibusay/:id/delete', checkOwnership, destroy)

module.exports = router;