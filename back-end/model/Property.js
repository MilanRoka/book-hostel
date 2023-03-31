const mongoose = require('mongoose');


const PropertySchema = new mongoose.Schema({
    ownerFirstName : {
        type: String,
        required: true
    },
    ownerLastName : {
        type: String,
        required: true
    },
    propertyName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true
    },
    city : {
        type: String,
        required: true
    },
    state : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Pending"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Property', PropertySchema);

