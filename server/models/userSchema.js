const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be atleast 3 charecters long']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [4, 'Username must be atleast 4 charecters long'],
        unique: true, 
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/@(gmail|hotmail)\.com$/, 'Email must end with @gmail.com or @hotmail.com'],
        unique: true, 
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be atleast 8 charecters long'],
        unique: true, 
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;