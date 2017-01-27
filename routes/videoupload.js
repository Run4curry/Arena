//this file is responsible for all uploading of videos to AWS S3
//and retrieval of video URLs from AWS DynamoDB so we can display
//them to the client
var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var AWS = require('aws-sdk');


//credentials for using AWS services
//NOTE TODO, ONLY PUSH TO GITHUB AND HOSTING SERVICE
//ONCE THIS HIDDEN
var params = {
    accessKeyId : 'AKIAJ75XUCHM6C3HWFWQ',
    secretAccessKey : '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'
};

var s3 = new AWS.S3(params);//create instance of s3 that will allow us to write the file to our cloud storage

router.post('/', function(req,res){
    var uploadParams = {
        Bucket : 'sdfdf',
        Key : '',
        Body: ''
    }
    console.log("swag");
    var filestream = fs.createReadStream('./routes/harambe-22.jpg');//construct filestream to read in the file
    //error handling for filestream
    filestream.on('error', function(err){
        console.log("File error! FUck you!", err);
    });
    uploadParams.Body = filestream;
    uploadParams.Key = path.basename('./routes/harambe-22.jpg');//this file is being called from the directory above
    //so we must put ourselves in the directory above

    s3.upload(uploadParams , function(err, data){
        if(err) {
            console.log("Fuck you!", err);
        }
        if(data){
            console.log("No Fuck You still!" , data.Location);
        }
    });


});





module.exports = router;
