const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Post = mongoose.model('Post');

const path = '/post';

router.post(path, requireLogin, (req, res) => {
   const { title, body } = req.body;
   if(!title || !body) {
       res.status(422).json({ error: 'Missing information' });
   }
   req.user.password = undefined;
   const post = new Post({ title, body , postedBy: req.user });
   post.save()
       .then(post => res.json({ post }))
       .catch(err => console.log(err));
});

module.exports = router;
