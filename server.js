// setup environment variables
require('dotenv').config()

const express = require('express')
const app = express()

// Engine
app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')

// method override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Views
app.set('views', __dirname + '/views')

// Used for POST data extraction
app.use(express.urlencoded({
    extended: true
}))

// Static
app.use(express.static('public'))

// Controllers
app.use('/places', require('./controllers/placesController'))

// Home
app.get('/', (req, res) => {
    res.render('home')
})

// 404 page
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen
app.listen(process.env.PORT, () => {
    console.log(`App started at ${process.env.PORT}.`)
})
