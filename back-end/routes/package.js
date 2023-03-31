const Package = require("../model/Package");
const router = require("express").Router();

// @route   GET api/package
// @desc    Get all packages
// @access  Public
router.get("/", async (req, res, next) => {
    try {
        const packages = await Package.find();
        return res.status(200).json({
        success: true,
        count: packages.length,
        data: packages,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
    },
)
// @route   POST api/package
// @desc    Add package
// @access  Public
router.post("/", async (req, res, next) => {
    try {
        const { packageName, packagePrice, packageDescription, packageImage, packageStatus } = req.body;
        const package = await Package.create(req.body);
        return res.status(201).json({
        success: true,
        data: package,
        });
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
        return res.status(400).json({ error: "This package already exists" });
        }
        res.status(500).json({ error: "Server Error" });
    }
    },
)
module.exports = router;
