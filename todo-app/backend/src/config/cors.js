module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Typer, Accept')
    next()
}