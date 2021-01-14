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

    var method=req.method.toLowerCase()
    
    //send the response
    res.end('hello world\n')

    console.log('request recive at path',trimedPath,'with method '+method);



     
})

 server.listen(3000,function(){
     console.log('listening on port 3000')
    })