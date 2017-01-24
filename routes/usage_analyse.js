var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var portal = req.query.portal;
    var isPortal = Boolean(portal);
    if (isPortal) {
        res.render('usage_analyse', { title: '' , layout : null});
    } else {
        res.render('usage_analyse', { title: '' });
    }
});

module.exports = router;
