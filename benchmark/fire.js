var Fire = require('../lib/log');
var f = new Fire({
    host: '192.168.40.36',
    port: 9998,
    terminal: 'off'
});

var ops = 100000;
var st = +new Date();
for(var i = 0; i < ops; i++){
    f.log(i);
}

var time = +new Date() - st;
var ops_ps = parseInt((1000/time) * ops);
process.stdout.write(ops_ps + ' op/s');
process.exit(0);