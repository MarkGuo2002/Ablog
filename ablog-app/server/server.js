const express = require('express');
const path = require('path');
const auth = require('./middleware/auth-middleware');

const app = express();
const usersRoutes = require('./routes/users');
const blogsRoutes = require('./routes/blogs');
const authRoutes = require('./routes/auth');

// Middleware for parsing JSON requests
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// API routes
app.use('/api/users', usersRoutes);
app.use('/api/blogs', blogsRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
