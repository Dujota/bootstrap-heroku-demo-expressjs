const express = require('express');

const router = express.Router();
const postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
// router.get('/new', moviesCtrl.new);
// router.get('/:id', moviesCtrl.show);

module.exports = router;
