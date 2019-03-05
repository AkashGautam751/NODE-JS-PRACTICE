var events= require('events');

var myEmitter= new events.EventEmitter();

myEmitter.on('some event', function (msg) {
    console.log(msg);
})

myEmitter.emit('some event','Event was emitted');
