const webSocket = require('ws');

let wss = new webSocket.Server({port: 8080});

let clientArr = [];
// wss.on('open', function(w){
//     clientArr.push(w);
// });

wss.on('connection', function(ws){
    clientArr.push(ws);
    ws.on('message', function (data) {
        clientArr.forEach((w) => {
            console.log(data);
            w.send(JSON.stringify({type: 'ADD', data: JSON.parse(data)}));
        })
    })
});
