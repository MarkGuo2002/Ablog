const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const upload = require('../config/upload');

const jwt_secret = 'helloworld'; // Change this to your own secret

// Endpoint for uploading files
// router.post('/upload', upload.fields([{ name: 'portrait', maxCount: 1 }, { name: 'music', maxCount: 1 }]), async (req, res) => {
//     try {
//       const portraitPath = req.files['portrait'] ? `/uploads/${req.files['portrait'][0].filename}` : null;
//       const musicPath = req.files['music'] ? `/uploads/${req.files['music'][0].filename}` : null;
//       res.status(200).json({ portraitPath, musicPath });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error uploading file');
//     }
//   });


// save a new blog, in the body there is title 
router.post('/save', async (req, res) => {
    const { title, content, portraitPath, musicPath, emoji } = req.body;
    try {
        // Save the blog content to the database
        // if the blog exists, then update it

        if (req.body.blog_id) {
            const updatedBlog = await pool.query(
                'UPDATE blogs SET title = $1, content = $2, portrait_photo = $3, blog_music_url = $4, title_emoji = $5 WHERE blog_id = $6 RETURNING *',
                [title, content, portraitPath, musicPath, emoji, req.body.blog_id]
            );
            return res.status(201).json({ msg: 'Blog updated', blog: updatedBlog.rows[0] });
        }

        const newBlog = await pool.query(
            'INSERT INTO blogs (title, content, portrait_photo, blog_music_url, title_emoji) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [title, content, portraitPath, musicPath, emoji]
          );

        res.status(201).json({ msg: 'Blog saved', blog: newBlog.rows[0] });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// retrieve all blogs
router.post('/retrieve', async (req, res) => {
    console.log("hello")
    try {
        const allBlogs = await pool.query('SELECT * FROM blogs');
        res.status(200).json(allBlogs.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// Endpoint to retrieve a single blog by blog_id
router.get('/:blog_id', async (req, res) => {
    const { blog_id } = req.params;
    try {
        const blog = await pool.query('SELECT * FROM blogs WHERE blog_id = $1', [blog_id]);
        if (blog.rows.length === 0) {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        res.status(200).json(blog.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Endpoint to delete a blog by blog_id
router.delete('/:blog_id', async (req, res) => {
    const { blog_id } = req.params;
    try {
        const deleteResponse = await pool.query('DELETE FROM blogs WHERE blog_id = $1 RETURNING *', [blog_id]);
        if (deleteResponse.rows.length === 0) {
            return res.status(404).json({ msg: 'Blog not found' });
        }
        res.status(200).json({ msg: 'Blog deleted successfully', blog: deleteResponse.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;
