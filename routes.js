const express = require('express');
const multer = require("multer");
const route = express.Router();

//imports of controller
const tagform = require('./controller/tagForm');

//middleware with multer for uploading
const uploadConfig = require("./config/upload");
const tagFormEmp = require('./controller/tagFormEmp');
const upload  = multer(uploadConfig);

var cpUpload = upload.fields([{ name: 'fotocedula', maxCount: 2 }, { name: 'fototag', maxCount: 2 }])

//form sending persona natural
route.post("/form/create",cpUpload, tagform.registerTagAccount);

//form sending empresas
route.post("/form/create-empresa",cpUpload, tagFormEmp.registerTagAccountEmp);


module.exports = route;