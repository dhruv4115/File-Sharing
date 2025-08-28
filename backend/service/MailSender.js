const nodemailer = require('nodemailer');
const transporter = require('../config/Mailer');

const sendMail = async({emailTo, emailFrom, link, fileName}) =>{
    await transporter.sendMail({
        from: emailFrom,
        to: emailTo,    
        subject: 'File Ready to Download',
        text: `Hi from NodeMailer`,
        html : `You have been invited by ${emailFrom} to view ${fileName} :- ${link}`,
    },function(err, data){
        if(err){
            console.log("Error" + err);
        }else{
            console.log(`Email sent successfully to ${emailTo}`);
        }
    });
}
module.exports = sendMail;