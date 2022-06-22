const express = require("express");
const models = require("../models");
const router = express.Router();
const { User } = require("../models");


router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log(users)
    res.send(users);

  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res) => {
  res.json(await User.findByPk(req.params.id))
});

router.post("/", async (req, res, next) => {
  try {
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
      }
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});
router.delete('/user/:id', async (req, res) => {
	await User.destroy(req.body, {
		where : {id : req.params.id},
		

	});
	res.send('deleted!!')
})



module.exports = router;
