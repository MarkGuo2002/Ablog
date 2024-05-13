const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const jwt_secret = 'helloworld'; // Change this to your own secret



// save a new blog, in the body there is title 
router.post('/save', async (req, res) => {
    const { title, content } = req.body;
    try {
        // Save the blog content to the database
        const newBlog = await pool.query('INSERT INTO blogs (title, content) VALUES ($1, $2) RETURNING *', [title, content]);

        res.status(201).json({ msg: 'Blog saved', blog: newBlog.rows[0] });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// retrieve all blogs
router.post('/retrieve', async (req, res) => {
    try {
        const allBlogs = await pool.query('SELECT * FROM blogs');
        res.status(200).json(allBlogs.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;
