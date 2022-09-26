const http = require('http');
const io = require('socket.io')
const appServer = require('./app')
const httpServer = http.createServer(appServer)
const socketServer = io(httpServer)
const sockets = require('./sockets')
require('dotenv').config()


const { mongoConnect } = require('./config/database')

const PORT = process.env.PORT || 5000;

async function startServer(){
    await mongoConnect()

    httpServer.listen(PORT, () => {
			console.log(`Server is Listening on Port ${PORT}`)
		}); 
     sockets.listen(socketServer)
}
startServer();
