const path = require('path');
const cors = require('cors');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const imageupload = require('express-fileupload');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(imageupload());
app.use(cors());

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/words', require('./routes/wordRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/upload', require('./routes/fileRoutes'));

// for getting images in base64
app.use('/api/image', require('./routes/imageRoutes')); 

// for getting audio in base 64
app.use('/api/audio', require('./routes/audioRoutes'));

app.get('/', (req, res) => {
    res.send("Welcome to RickyABC API")
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
