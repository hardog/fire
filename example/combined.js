var Fire = require('../lib/fire');
var f = new Fire({
    host: '192.168.40.36',
    port: 9998
});

f.send('hello, this is Combined! ^.^');
