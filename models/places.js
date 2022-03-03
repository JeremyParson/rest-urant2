const { default: mongoose } = require('mongoose')
const {Schema} = require('mongoose')

const placeSchema = Schema({
    name: String,
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    cuisines: String,
    pic: {type: String, default: 'http://placekitten.com/400/400'}
})

const Place = mongoose.model("Places", placeSchema)

module.exports = Place