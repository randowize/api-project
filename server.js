var http = require('http');
var express = require('express');
var moment = require('moment');

var app = express();
var server = http.createServer(app);

app.get('/:timestamp?', (req, res) => {
    var timestamp = req.params.timestamp;
    var unix = null, natural = null;
    if(timestamp){
       var ts = parseInt(timestamp, 10);
       var m = (isNaN(ts)) ? moment(timestamp) : moment.unix(ts);
       unix = m.unix();
       natural = m.format('MMMM DD, YYYY');
    }
    return res.json({
        natural:natural,
        unix:unix
    });
});

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("timestap server runnint at ", addr.address + ":" + addr.port);
});