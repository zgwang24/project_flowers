/**
* app entrance
* @Auther: zgwang
* @Date: 2016.9.18
*/

var io = require('socket.io');
var work = require('./work.js');
var koa = require('koa');
var app = koa();
var server = require('http').Server(app.callback());
var io = require('socket.io')(server);

work(io);
server.listen(8128);