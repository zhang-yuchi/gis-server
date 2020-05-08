const koa = require('koa')
const cors = require('koa-cors')
const static = require('koa-static');
const app = new koa()
app.use(cors())
app.use(static(__dirname+'/public'));
app.listen(4000)

