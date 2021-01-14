var http=require('http')
var url=require('url')
//the server 
const server =http.createServer(function(req, res){
    res.end('server is working')
})

var parseUrl=url.parse(req.url,true)

var path=parseUrl.pathname

 server.listen(3000,function(){
     console.log('listening on port 3000')
    })