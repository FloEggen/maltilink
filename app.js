const express = require('express')
const app = express()

let port = process.env.PORT
if (port == null || port == "") { port = 3000 }

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

const router = require('./router.js')
app.use('/', router)

app.listen(port)