const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    }
})

const UserModel = mongoose.model('User', userSchema);

module.exports = {
    UserModel
};