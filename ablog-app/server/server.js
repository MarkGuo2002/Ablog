// server/server.js
const express = require('express');
const auth = require('./middleware/auth-middleware');
const app = express();
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');



app.use(express.json()); // For parsing application/json
//print info about request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


