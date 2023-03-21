const router = require("express").Router();
const bcrypt = require('bcryptjs');
const Property = require('../model/Property')

//Create Property
router.post('/create', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPwd = await bcrypt.hash(req.body.password, salt);
    const property = new Property({
        ownerFirstName : req.body.ownerFirstName,
        ownerLastName : req.body.ownerLastName,
        propertyName : req.body.propertyName,
        email : req.body.email,
        city : req.body.city,
        state : req.body.state,
        password :  hashPwd
    })
    try{
        const savedProperty = await property.save();
        return res.status(200).json({
            status : "Success",
            message : "User registered successfully",
            data : savedUser
          })
    }catch(err){
        res.json(err);
    }
}
)


//Get All Property
router.get('/', async (req, res) => {
    try{
        const property = await Property.find();
        res.json(property);
    }catch(err){
        res.json(err);
    }
}
)

//Get Property by ID
router.get('/:id', async (req, res) => {
    try{
        const property = await Property.findById(req.params.id);
        res.json(property);
    }catch(err){
        res.json(err);
    }
}
)

//Delete Property by ID
router.delete('/property/:id', async (req, res) => {
    try{
        const removedProperty = await Property.remove({_id: req.params.id});
        res.json(removedProperty);
    }catch(err){
        res.json(err);
    }
}
)

//Update Property by ID
router.put('/property/:id', async (req,res) =>{
    const {id} = req.params
    const {ownerFirstName, ownerLastName, propertyName, email, city, state, password} = req.body
    try{
        const UpdatedProperty = await Property.findByIdAndUpdate(
            id,
            {
                $set : {
                    ownerFirstName : ownerFirstName,
                    ownerLastName : ownerLastName,
                    propertyName : propertyName,
                    email : email,
                    city : city,
                    state : state,
                    password : password
                    
                }
            }
        )
        res.json(UpdatedProperty)
    }catch(err){
        res.json(err)
    }

}
)
module.exports = router;


