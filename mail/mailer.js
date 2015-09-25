var http = require('http');
var url = require('url')
var qs = require('querystring');

var nodemailer = require('nodemailer');
var config = require('./mailer.json')
var validator = require('validator');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Yandex',
    auth: config.auth
});
var mailOptions = config.mailoptions

http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  if (parsedUrl.pathname === "/mail") {
      if (!validator.isEmail(parsedUrl.query.from)) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.end("callback(" + JSON.stringify({ok: false, error: "Неверный email адрес"}) + ")")
        return
      }
      mailOptions.text = parsedUrl.query.message + " от " + parsedUrl.query.from
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.end("callback(" + JSON.stringify({ok: false, error: "Internal error, please try again later."}) + ")")
        } else {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.end("callback(" + JSON.stringify({ok: true}) + ")")
        }
      });
  }    
}).listen(8080); // listen on tcp port 8080 (all interfaces)