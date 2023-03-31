const mongoose = require("mongoose");


const PackageSchema = mongoose.Schema({
    packageName:{
        type: String,
        required: [true, "Package name is required"],
    },
    packagePrice:{
        type: Number,
        required: [true, "Package price is required"],
    },
    packageDescription:{
        type: String,
        required: [true, "Package description is required"],
    },
    packageImage:{
        type: String,
    },
    packageStatus:{
        type: String,
      
    }
});

module.exports = mongoose.model("Package", PackageSchema);