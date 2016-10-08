var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService'); // require object
var path = require('path');

router.get("*", function (req, res) {
	var shortUrl = req.originalUrl.slice(1); //   shorturl -->/0, slice(1):without slash\
	var longUrl = urlService.getLongUrl(shortUrl);
	if (longUrl) {
		res.redirect(longUrl);
	} else {
		res.sendFile("404.html", {root: path.join(__dirname, '../public/views/')});
	}
	
});

module.exports = router;