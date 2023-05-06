const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    propertyName: {
      type: String,
      required: true,
    },
    ownersName: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    occupancy: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
    },
    image: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Property", PropertySchema);
