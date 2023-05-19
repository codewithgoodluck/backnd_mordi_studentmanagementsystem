const mongoose = require('mongoose')

const studentModel= mongoose.Schema(
    {firstName : {
        type:String,
        require:[true, 'please add a task']
    }},
    {lastName : {
        type:String,
        require:[true, 'please add a task']
    }},
    {studentClass : {
        type:String,
        require:[true, 'please add a task']
    }},
    {email : {
        type:String,
        require:[true, 'please add your email']
    }},

    {password : {
        type:String,
        require:[true, 'please add a password']
    }},

    {
     timestamps:true
    }
)

const Class = mongoose.model('Class', taskSchema)

module.exports = Class