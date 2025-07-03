const cron = require('node-cron');

function ExpiryCron(){
    cron.schedule('* * * * * *', () => {
        //Every Day at 7PM
        markallExpiryFilesInDB();
        console.log('running a task every minute');
    });
}

module.exports = ExpiryCron;

