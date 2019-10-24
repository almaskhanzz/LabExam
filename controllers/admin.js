var express = require('express');
var adminModel = require('../models/admin-model');
var router = express.Router();

router.get('/', function(request, response){
    var data={
        username: request.session.username
    }
    response.render('admin/index', {user:data});
});

router.get('*', function(request, response, next){
    if(request.session.username != ""){
		next();
	}else{
		response.redirect('/logout');
	}
});


module.exports = router;