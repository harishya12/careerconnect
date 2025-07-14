const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import the jobs route
const jobsRoutes = require('./routes/jobs');

// Use the route
app.use('/jobs', jobsRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});