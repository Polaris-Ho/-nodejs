var http = require('http');
var fs = require('fs');
var url = require('url');//url은 모듈 url을 가르킨다.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + _url));
    response.end(queryData.id);

});
app.listen(3000);