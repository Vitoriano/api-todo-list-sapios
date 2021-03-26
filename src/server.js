const app = require('./app')
const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
      }
})

const port = process.env.SERVER_PORT || 3000

// io.on('connection', socket => {
//     console.log('a user has been conected')

//     socket.emit('msg', {'data': "ola"})
// })

http.listen(port, err => {
    if (err) {
        console.log('Server not running...')
    } else {
        console.log('Server running at port: ' + port)
    }
})

