var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var portal = req.query.portal;
    var isPortal = Boolean(portal);
    if (isPortal) {
        res.render('wordtree', { title: '' , layout : 'portal-layout'});
    } else {
        res.render('wordtree', { title: '' });
    }
});

module.exports = router;
