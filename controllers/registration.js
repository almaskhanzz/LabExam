var express = require('express');
var userModel = require('../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
    response.render('registration/index');
});



module.exports = router;