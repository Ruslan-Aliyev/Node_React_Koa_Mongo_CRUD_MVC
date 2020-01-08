var route = require('koa-route');
var serve = require('koa-static');

var koa = require('koa');
var app = module.exports = koa();

app.use(serve(__dirname + '/Views/public'));

var ratingController = require('./Controllers/RatingController.js');
app.use(route.get('/', ratingController.show));
app.use(route.get('/read/', ratingController.readAll));
app.use(route.post('/', ratingController.create));
app.use(route.put('/', ratingController.update));
app.use(route.delete('/', ratingController.delete));

app.listen(3000);
console.log('listening on port 3000');