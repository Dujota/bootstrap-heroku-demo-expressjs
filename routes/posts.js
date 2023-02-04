const express = require('express');

const router = express.Router();
const postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.get('/:id', postsCtrl.show);
// router.get('/new', moviesCtrl.new);

module.exports = router;
