var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var portal = req.query.portal;
    var isPortal = Boolean(portal);
    if (isPortal) {
        res.render('searchui', { queryResults: '' , layout : 'portal-layout' , isPortal : true});
    } else {
        res.render('searchui', { queryResults: '' });
    }
});

module.exports = router;
