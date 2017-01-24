var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var portal = req.query.portal;
    var isPortal = Boolean(portal);
    if (isPortal) {
        res.render('plantdowntime_2011_2016', { title: ''  , layout : 'portal-layout'});
    } else {
        res.render('plantdowntime_2011_2016', { title: '' });
    }
});

module.exports = router;
