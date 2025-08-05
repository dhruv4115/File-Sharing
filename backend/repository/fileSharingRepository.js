const File = require('../models/file');

async function markallExpiryFilesInDB ()
{
    try
    {
        await File.updateMany(
            {expiryAt : {$lt : Date.now()}},
            {$set : {isDeleted : true}}
        );
    
        console.log("Deletion job done");
    }
    catch (error)
    {
        console.log("Error in deleting", error);
    }
}

module.exports = {markallExpiryFilesInDB};