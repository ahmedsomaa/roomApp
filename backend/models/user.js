const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

var validateEmail = (email) => {
    var domain = '@vodafone.com'
    if((/\S+@\S+\.\S+/).test(email)){
        return (email.indexOf(domain, email.length-domain.length) != -1)
    }
    //return (/\S+@\S+\.\S+/).test(email.indexOf("@vodafone.com", email.length-"@vodafone.com".length != -1))
}

/*var validatePass = (confirmPassword) => {
    var password = "hello"
    console.log(password+'\t'+confirmPassword)
    return (confirmPassword.value() == "hello")
}*/

var userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: "Password is required"
    },
    /*confirmPassword: {
        type: String,
        //required: 'Confirm password is required',
        validate: [validatePass, "Password doesn't match"]
    }*/
})

userSchema.pre('save', function(next){
    var user = this
    // check if user new or changed the password
    if(user.isNew || user.isModified('password')){
        bcrypt.genSalt(10, function(err, salt){
            if(err) {return next(err)}
            bcrypt.hash(user.password, salt, null, function(err, hashed){
                if(err){return next(err)}
                user.password = hashed
                next()
            })
        })
    } else {
        next()
    }
  
})

userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) {return callback(err)}
        callback(null, isMatch)
    })
}
module.exports = mongoose.model('user', userSchema) 