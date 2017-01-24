var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var fileName = './jsondata/'+req.query.fileName;
    //fileName = './jsondata/samplejson.json';
    console.log('=========================');
    
    console.log(req.query.fileName);
    console.log(fileName);

//    var data ={ specialurl:'test'};
//    console.log(data);
//    res.render('display',data);
//
//    
    fs.readFile(fileName,'utf8', function read(err, data) {
	console.log(err);	
	console.log('--------------------------');
	var jdata = JSON.parse(data);
	console.log(jdata.title);

    var portal = req.query.portal;
    var isPortal = Boolean(portal);
    if (isPortal) {
        jdata.layout = null;
        res.render('display', jdata);
    } else {
        res.render('display', jdata  );
    }
    })

    

});

module.exports = router;
