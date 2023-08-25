const router = require("express").Router();
const phonesJson = require("../data/phones.json")

router.get("/phones", (req, res, next) => {
  res.json(phonesJson);
});

router.get("/phones/:phoneId", (req, res, next) => {
  try {
    const phoneId = req.params.phoneId;

    const foundPhone = phonesJson.find(phone => phone.id.toString() === phoneId);

    if (!foundPhone) {
      return res.status(404).json({ error: "Phone not found" });
    }

    res.json(foundPhone);
  } catch (error) {
    console.error("Error fetching phone data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = router;
