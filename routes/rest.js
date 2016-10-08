var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlService = require('../services/urlService'); // require object

router.post("/urls", jsonParser, function (req, res) {
	var longUrl = req.body.longUrl; //you can get longurl if the http request contains it
	var shortUrl = urlService.getShortUrl(longUrl);
	res.json({
		shortUrl: shortUrl,
		longUrl: longUrl
	});
});

module.exports = router;