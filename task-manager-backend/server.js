const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://atharvalour:47KpDnowCo2VziZ5@cluster0.l9la4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Sample route
app.get('/', (req, res) => {
    res.send('Task Manager API is running');
});

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
