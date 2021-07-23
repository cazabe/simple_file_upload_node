const express = require('express');
const multer = require("multer");
const route = express.Router();

//imports of controller
const {uploadImage} = require('./controller/uploadImgForm');

//middleware with multer for uploading
const uploadConfig = require("./config/upload");
const upload  = multer(uploadConfig);

var cpUpload = upload.fields([{ name: 'firstImg'}, { name: 'secondImg'}])

//form sending persona natural
route.post("/form/create",cpUpload, uploadImage);


module.exports = route;