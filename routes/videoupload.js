//this file is responsible for all uploading of videos to AWS S3 
//and retrieval of video URLs from AWS DynamoDB so we can display 
//them to the client 
var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var AWS = require('aws-sdk');
var multer = require('multer');
var upload = multer({dest: 'public/uploads/'});



//use the multipartymiddleware middleware 

//credentials for using AWS services 
//NOTE TODO, ONLY PUSH TO GITHUB AND HOSTING SERVICE
//ONCE THIS HIDDEN
//set environment variables on Heroku: S3_URL DYNAMO_URL  
var params = {
    
};

var s3 = new AWS.S3(params);//create instance of s3 that will allow us to write the file to our cloud storage 

router.post('/', upload.single('file') , function(req,res){
    var uploadParams = {
        Bucket : 'sdfdf',
        Key : '',
        Body: ''
    };
    //debugging statements 
    console.log(req.body);
    console.log(req.file);
    console.log(req.file.path);

    console.log("swag");
    //the file that the user uploaded on the client side and that the server will upload 
    //to S3 Bucket 
    var filestream2 = fs.createReadStream(req.file.path);
    var filestream = fs.createReadStream('./routes/harambe-22.jpg');//construct filestream to read in the file 
    //error handling for filestream 
    filestream.on('error', function(err){
        console.log("File error! FUck you!", err);
    });
    //error handling for filestream 2
    filestream2.on('error', function(err){
        console.log("File error in filestream2!!");
    });

    uploadParams.Body = filestream2;
    uploadParams.Key = path.basename(req.file.path);//this file is being called from the directory above
    //so we must put ourselves in the directory above 

    s3.upload(uploadParams , function(err, data){
        if(err) {
            console.log("Fuck you!", err);
        }
        if(data){
            console.log("No Fuck You still!" , data.Location);
            var response = {
                file : req.file ,
                location : data.Location
            };
            fs.unlinkSync(req.file.path);
            /*TODO We want to store the data.Location variable in the DynamoDB database 
            or SQL database, whatever we decide on implementing here regardless the 
            method should be straightforward 
            
             */
            console.log(response);
            res.json(response);
        }
    });

    
});





module.exports = router;
