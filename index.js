"use strict";

var connect = require('connect'),
  http = require('http');

connect()
  .use(connect.static(__dirname))
  .listen(2121);

console.log("You can now connect to http://localhost:2121/")
