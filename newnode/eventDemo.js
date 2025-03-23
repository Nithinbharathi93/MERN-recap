import { EventEmitter } from 'events';

// emitter instance creation
const myEmitter = new EventEmitter();

function greetHandler(name='mate') {
    console.log(`Sup ${name}??`);
}

function goodbyeHandler() {
    console.log("Bye Bye Bhaiya..!");
}

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye');

myEmitter.on('error', (err) => {
    console.log(`Got an error: ${err}`);
})

myEmitter.emit('error', new Error('aw snap'));