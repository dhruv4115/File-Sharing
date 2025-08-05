const File = require('../models/File');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('../config/CloudinaryConfig');
const fs = require('fs');
const { log } = require('console');
const { shortenUrl } = require('../service/urlService');

router.post("/upload", upload.single('file'),async (req, res) => {
    try{
        const {expiry} = req.body;
        if(!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: 'auto',
        });
        fs.unlinkSync(req.file.path);
        const urlDoc = await shortenUrl(result.url);
        const shortId = urlDoc.shortId; // Extract just the short ID string
        // const expiry = getExpiryDate();
        const createdFile = await File.create({
            shortId,
            cloudinaryUrl: result.url,
            fileName: req.file.originalname,
            size: req.file.size,
            expiry: new Date()
        });
        sendMail();
        res.json({createdFile});
        
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;