const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 8081;
const fileUploadRoute = require('./routes/fileUploadRoute');
const ExpiryCron = require('./service/cronJob');
const sendMailRoute = require('./routes/sendMailRoute');

connectDB(process.env.MONGO_URI);
ExpiryCron();

app.use(express.json());


app.get('/', (req, res) => {    
    res.send('Welcome to File Sharing App');
});

app.use('/', fileUploadRoute);
app.use('/', sendMailRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
