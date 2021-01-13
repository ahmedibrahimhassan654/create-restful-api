var http=require('http')


const server =http.createServer(function(req, res){
    res.end('server is working')
})



 server.listen(3000,function(){
     console.log('listening on port 3000')
     console.log('listening on port 3000')
 })