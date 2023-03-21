const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    ownerName:{
        type: String,
        required: [true, "Name is required"],
    },
    email:{
        type: String,
        required: [true, "Email is required"],
    },
    hostelName:{
        type: String,
        required: [true, "Property name is required"],
    },
    country:{
        type: String,
        required: [true, "Country is required"],
    },
    city:{
        type: String,
        required: [true, "City is required"],
    },
    streetName:{
        type: String,
        required: [true, "Street name is required"],
    },
    rooms:{
        type: Number,
        required: [true, "Number of rooms is required"],
    },
    beds:{
        type: Number,
        required: [true, "Number of beds is required"],
    }
});

module.exports = mongoose.model("Admin", AdminSchema);