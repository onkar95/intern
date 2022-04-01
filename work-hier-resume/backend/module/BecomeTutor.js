const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    Stream: {
        type: String,
        require:true,
    },
    phoneNo: {
        type: String,
        require:true,
    },
    Year: {
        type: String,
        require:true,
    },
    email: {
        type: String,
        require:true,

    },
    Degree: {
        type: String,
        require:true,

    },
}, { timestamp: true })

module.exports=mongoose.model('BecomeTutor',userSchema)