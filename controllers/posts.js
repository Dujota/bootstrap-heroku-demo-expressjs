const Post = require('../models/post');

function index(req, res) {
  Post.find({}, (err, posts) => {
    res.render('posts/index', { posts });
  });
}

function create(req, res) {
  console.log(req.body);
  const post = new Post(req.body);
  post.save((err) => {
    // if (err) return res.redirect('/posts/new');
    if (err) {
      console.log(err);
    }
    res.redirect('/posts');

    // res.redirect(`/posts/${post._id}`);
  });
}

function show(req, res) {
  Post.findById(req.params.id, (err, post) => {
    res.render('posts/show', { post });
  });
}

module.exports = { index, create, show };
