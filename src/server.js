const app = require('./app')

const port = process.env.SERVER_PORT || 3000

app.listen(port, err => {
    if (err) {
        console.log('Server not running...')
    } else {
        console.log('Server running at port: ' + port)
    }
})

