const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./Routes/route');



const app = express();
app.use(express.json());

const PORT = 3000;

//mongodb connection 
const mongodbUri = 'mongodb://localhost:27017/note-taking-app';
mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
})

//routes
app.use('/', noteRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})