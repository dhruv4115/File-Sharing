const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 8081;
const sendMail = require('./service/MailSender');
const fileUploadRoute = require('./routes/fileUploadRoute');

connectDB(process.env.MONGO_URI);

app.use(express.json());


app.get('/', (req, res) => {    
    res.send('Welcome to File Sharing App');
});
let emailOptions = {
    emailTo: "whatsappbackupself@gmail.com", 
    emailFrom: "tiwaridhruv4146@gmail.com", 
    link: "abcd", 
    fileName: "abdc", 
    size: 1234
};

// app.get('/send', (req, res) =>{
//     sendMail(emailOptions);
//     res.send('Email sent successfully');
// });
app.use('/', fileUploadRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
