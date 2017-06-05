require('./config/database')
const server  = require('./config/server')
require('./config/routes')(server)