const express = require("express");
const router = express.Router();
const Users = require("../model/User"); //Import User Schema
const bcrypt = require("bcryptjs");
const { regValidation, LoginValidation } = require("../validate"); // Import validation function
const jwt = require("jsonwebtoken");
const User = require("../model/User");

// var fileId = mongoose.Types.ObjectId();

// GET all users
router.get("/", async (req, res) => {
  const user = await Users.find(); // Retrieve all users from the database
  res.json(user); // Send the retrieved users at a JSON object in the response
});

// POST a new user
router.post("/register", async (req, res) => {
  // Validate the request body
  const { error } = regValidation(req.body);
  const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(req.body.password, salt);
  // if there is error, send the first error detail as a response
  if (error) return res.send(error.details[0].message);

  // Create a new instance of User Schema
  const user = new Users({
    //user is the new instance of User Schema
    name: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    email: req.body.email,
    password: hashPwd,
    phone: req.body.phone,
  });
  try {
    const savedUser = await user.save();

    return res.status(200).json({
      status: "Success",
      message: "User registered successfully",
      data: savedUser,
    });
  } catch (err) {
    res.json(err); //If there is an error, send the error object as a
    // JSON object in the response
  }
});

//get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById({ _id: req.params.id });
    res.json(user);
  } catch (err) {
    res.json("ERROR");
  }
});

// DELETE a user by id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Users.deleteOne({ _id: req.params.id }); //Delete the user
    //  with the specified id
    res.json(deleted); //Send the result as a JSON object in the response
  } catch (err) {
    res.json("ERROR");
  }
});

//update
router.patch("/:id", async (req, res) => {
  try {
    const updated = await Users.updateMany(
      { _id: req.params.id },
      {
        $set: {
          name: { firstName: req.body.firstName, lastName: req.body.lastName },
          email: req.body.email,
          password: req.body.password,
        },
      }
    );
    res.json(updated);
  } catch (err) {
    res.json("ERROR");
  }
});

// Login
router.post("/login", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(req.body.password, salt);

  const { error } = LoginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if email exists
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.send("Email or Password is wrong");
  //res.send(user.password)

  const validPwd = await bcrypt.compare(req.body.password, user.password);
  if (!validPwd) return res.send("Email or Password is wrong");

  //Create and assing token
  const token = jwt.sign({ _id: user.id }, "foihgdif");

  return res.status(200).json({
    token,
  });
});

module.exports = router;
