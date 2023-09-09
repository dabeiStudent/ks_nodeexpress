var http = require('http');
var fs = require('fs');
var events = require('events');
var express = require('express');
var app = express();

var fs = require("fs");
var url = require('url');

// Create a server
// http.createServer(function (request, response) {
//     // Parse the request containing file name
//     var pathname = url.parse(request.url).pathname;

//     // Print the name of the file for which request is made.
//     console.log("Request for " + pathname + " received.");

//     // Read the requested file content from file system
//     fs.readFile(pathname.substr(1), function (err, data) {
//         if (err) {
//             console.log(err);

//             // HTTP Status: 404 : NOT FOUND
//             // Content Type: text/plain
//             response.writeHead(404, { 'Content-Type': 'text/html' });
//         } else {
//             //Page found	  
//             // HTTP Status: 200 : OK
//             // Content Type: text/plain
//             response.writeHead(200, { 'Content-Type': 'text/html' });

//             // Write the content of the file to response body
//             response.write(data.toString());
//         }

//         // Send the response body 
//         response.end();
//     });
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
var id = 2;
app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + id];

        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        var user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
// function printHello() {
//     console.log("Hello, World!");
// }

// // Now call above function after 2 seconds
// setInterval(printHello, 2000);
// Now call above function after 2 seconds
// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File opened successfully!");
//     console.log("Going to read the file");

//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//             console.log(err);
//         }

//         // Print only read bytes to avoid junk.
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }

//         // Close the opened file.
//         fs.close(fd, function (err) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log("File closed successfully.");
//         });
//     });
// });
// var buf = new Buffer(1024);

// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File opened successfully!");
//     console.log("Going to read the file");

//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(bytes + " bytes read");

//         // Print only read bytes to avoid junk.
//         if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//         }
//     });
// });
// console.log("Going to get file info!");
// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("Got file info successfully!");

//     // Check file type
//     console.log("isFile ? " + stats.isFile());
//     console.log("isDirectory ? " + stats.isDirectory());
// });
// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File opened successfully!");
// });
// // Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
// });

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");

// var fs = require("fs");
// var data = 'Simply Easy Learning';

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// // Write the data to stream with encoding to be utf8
// writerStream.write(data, 'UTF8');

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function () {
//     console.log("Write completed.");
// });

// writerStream.on('error', function (err) {
//     console.log(err.stack);
// });

// console.log("Program Ended");
// var data = '';
// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function (chunk) {
//     data += chunk;
// });

// readerStream.on('end', function () {
//     console.log(data);
// });

// readerStream.on('error', function (err) {
//     console.log(err.stack);
// });

// console.log("Program Ended");


// var buf = new Buffer('Simply Easy Learning');
// var json = buf.toJSON(buf);

// console.log(json);

// buf = new Buffer(26);
// for (var i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }

// console.log(buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
// console.log(buf.toString('ascii', 0, 5));   // outputs: abcde
// console.log(buf.toString('utf8', 0, 5));    // outputs: abcde
// console.log(buf.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde
// var eventEmitter = new events.EventEmitter();

// var listner1 = function listner1() {
//     console.log('listner1 executed.');
// }

// var listner2 = function listner2() {
//     console.log('listner2 executed.');
// }

// eventEmitter.addListener('connection', listner1);

// eventEmitter.on('connection', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount
//     (eventEmitter, 'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// eventEmitter.emit('connection');

// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");

// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//     console.log('connection succesful.');


//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully.');
// });

// eventEmitter.emit('connection');
// console.log("Program Ended.");
// fs.readFile('input.txt', (err, data) => {
//     if (err) { return console.log(err) };
//     console.log(data.toString());
// });
// console.log('Program Ended');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello World');
}).listen(8080);

// console.log('Server is now running on port: 8080')
