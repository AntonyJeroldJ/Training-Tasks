const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    business_name: {
        type: String,
        required: true 
    },
    contact_person: {
        type: String,
        required: true
    },
    contact_no: {
        type: String,
        required: true
    },    
    address: {
        type: String,
        required: true
    },
    
    postal: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    fax_no: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    
    email_id: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    second_address: {
        type: String,
        default: null
        
    },
}) 

module.exports = mongoose.model('user', userSchema)