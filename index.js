var http=require('http')
var url=require('url')
//the server should respond to all the request with string
const server =http.createServer(function(req, res){

    //get the url and parse it
    var parseUrl=url.parse(req.url,true)


    //get the path
    var path=parseUrl.pathname//this path is not trimed

    //trim the path 
    var trimedPath=path.replace(/\\/g, '')
    //get the url http method 
    var method=req.method.toLowerCase()

    //get the url query string
    var queryobject=parseUrl.query

    //get the headers as an object

    var headers=req.headers

    //send the response
    res.end('hello world\n')

    console.log('request header is ',headers);



     
})

 server.listen(3000,function(){
     console.log('listening on port 3000')
    })