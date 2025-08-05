const cron = require('node-cron');
const { markallExpiryFilesInDB } = require('../repository/fileSharingRepository');

function ExpiryCron(){
    cron.schedule('0 7 * * *', () => {
        //Every Day at 7AM
        markallExpiryFilesInDB();
        console.log('running a task every day at 7AM');
    });
}

module.exports = ExpiryCron;

/*1.Build THe Features
2. Validate the uploaded files and return approppriate response message along with status code
3. Complete code for cron job. SetExpiry -> (CHOOSE) Url expiry or File expiry Reason
4.For Expiry you have options - 1 day, 2 day, 7 day, 31 days -> only date matters */
