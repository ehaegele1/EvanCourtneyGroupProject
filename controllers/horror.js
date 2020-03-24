const express = require('express');
const router = express.Router();
const Blog = require('../models/horror.js');

router.get('/', (req, res) => {
    Blog.find({}, (error, foundBlog) => {
        res.json(foundBlog);
    })
})

router.post('/', (req, res) => {
    Blog.create(req.body, (err, createdBlog) => {
        res.json(createdBlog);
    });
});

router.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (error, deletedBlog) => {
        res.json(deletedBlog);
    });
});

router.put('/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBlog) => {
        res.json(updatedBlog);
    })
})



module.exports = router;
