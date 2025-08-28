const File = require('../models/File');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('../config/CloudinaryConfig');
const fs = require('fs');
const { log } = require('console');
const { shortenUrl } = require('../service/urlService');
const sendMail = require('../service/MailSender');
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const fileTypeValidator = require('../middlewares/fileValidator');
const validateToken = require('../middlewares/tokenValidator');

module.exports = router.post("/upload", validateToken, upload.single('file'), fileTypeValidator, async (req, res) => {
    try{
        const {expiry} = req.body.expiry;
        if(!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: 'auto',
        });
        fs.unlinkSync(req.file.path);
        const urlDoc = await shortenUrl(result.url);
        const shortId = urlDoc.shortId; // Extract just the short ID string
        console.log(req.body.userName);
        // const expiry = getExpiryDate();
        const createdFile = await File.create({
            userName : req.body.userName,
            shortUrl : shortId,
            cloudinaryUrl: result.url,
            fileName: req.file.originalname,
            size: req.file.size,
            createdAt : Date.now(),
            expiryAt : expiry ? new Date(expiry).getTime() : new Date().getTime(),
            expiry: new Date()
        });
        sendMail();
        res.json({createdFile});
        
    }
    catch(err){
        console.log(err);
        res.send("Error while uploading file");
    }
});
