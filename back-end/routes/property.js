const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Property = require("../model/Property");

//Create Property
router.post("/create", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(req.body.password, salt);
  const property = new Property({
    propertyName: req.body.propertyName,
    property1: req.body.property1,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    state: req.body.state,
    address1: req.body.address1,
    street: req.body.street,
    password: hashPwd,
    confirmPassword: hashPwd,
    image : req.body.image
  });
  try {
    const savedProperty = await property.save();
    return res.status(200).json({
      status: "Success",
      message: "User registered successfully",
      data: savedUser,
    });
  } catch (err) {
    res.json(err);
  }
});
//Get All Property
router.get("/", async (req, res) => {
  try {
    const property = await Property.find();
    res.json(property);
  } catch (err) {
    res.json(err);
  }
});
//Get Property by ID
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.json(property);
  } catch (err) {
    res.json(err);
  }
});
//Delete Property by ID
router.delete("/property/:id", async (req, res) => {
  try {
    const removedProperty = await Property.remove({ _id: req.params.id });
    res.json(removedProperty);
  } catch (err) {
    res.json(err);
  }
});
//Update Property by ID
router.put("/property/:id", async (req, res) => {
  const { id } = req.params;
  const {
    // propertyName,
    property1,
    address1,
    street,
    phone,
    email,
    city,
    state,
    password,
    confirmPassword,
    image,
  } = req.body;
  try {
    const UpdatedProperty = await Property.findByIdAndUpdate(id, {
      $set: {
        // propertyName: propertyName,
        property1: property1,
        email: email,
        phone: phone,
        city: city,
        state: state,
        address1: address1,
        street: street,
        password: password,
        confirmPassword: confirmPassword,
        image: image,
      },
    });
    res.json(UpdatedProperty);
  } catch (err) {
    res.json(err);
  }
});
//Change Status
router.put("/status/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedProperty = await Property.findByIdAndUpdate(id, {
      $set: {
        status: status,
      },
    });
    res.json(updatedProperty);
  } catch (err) {
    res.json(err);
  }
});

//get by location
router.get("/location/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const property = await Property.find({
      city: city,
    })
    res.json(property);
  } catch (err) {
    res.json(err);
  }
});





module.exports = router;
