//DEPENDENCIES
const Bread = require('./bread')
const mongoose = require('mongoose')
const { Schema } = mongoose

//SCHEMA
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Dora', 'Alejandro', 'Alyssa', 'Mariely', 'Seryna', 'Yolanda', 'Mari']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String

},{toJSON: {virtuals: true}})

//virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// hooks 
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({ baker: this._conditions._id})
    .then(deleteStatus => {
        console.log(deleteStatus)
    })
})            


//model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker