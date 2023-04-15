var http = require('http');
var dt = require('./mydate');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("date is:"+dt.mydate());
    res.end();
}).listen(8080);