const express = require('express');
const multer = require("multer");
const route = express.Router();

//imports of controller
const tagform = require('./controller/tagForm');

//middleware with multer for uploading
const uploadConfig = require("./config/upload");
const upload  = multer(uploadConfig);

//form sending
route.post("/form/create",upload.single("fotocedula"), tagform.registerTagAccount);

module.exports = route;

