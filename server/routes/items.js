const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /api/items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /api/items:id
router.get("/:id", async (req, res, next) => {
  // console.log(req.params.id);
  try {
    const item = await Item.findByPk(req.params.id);
    if(item){
    res.send(item);
    } else {
      res.status(404).send({error: "Not Found"});
    }
  } catch (error) {
    next(error);
  }
});

// POST /item
// router.post('/', async (req, res, next) => {
//   try {
//     const [item, wasCreated] = await Item.findOrCreate({
//       where: {
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         category: req.body.category,
//         image: req.body.image,
//       }
//     });
 
//     const page = await Page.create(req.body)
 
//     await page.setName(item)
 
//     if (req.body.categorys) {
//       const categoryArray = req.body.categorys.split(' ')
//       const categorys = []
//       for (const categoryName of categoryArray) {
//         const [category, wasCreated] = await Category.findOrCreate({
//           where: {
//             name: categoryName
//           }
//         })
//         categorys.push(category)
//       }
//       await page.addCategorys(categorys)
//     }
 
//     res.send(page)
//   } catch (error) {
//     next(error)
//   }
// })


//Post /item kierans code
router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    next(error);
  
  }
});


//PUT/PATCH /api/items:id
router.patch("/:id", async (req, res, next) => {
  try {
    let item = await item.findByPk(req.params.id);
    if (item) {
      item = await item.update(req.body);
      res.send(item);
    } else {
      res.status(404).send({ error: "Not Found" })
    }
  } catch (error) {
    next(error);
  }
});


//Delete request /api/items/:id
router.delete("/:id", async (req, res, next) => {
  // console.log(req.params.id);
  try {
    const item = await Item.findByPk(req.params.id);
    if(item){
      await item.destroy();
    res.status(204).send();
    } else {
      res.status(404).send({error: "Not Found"});
    }
  } catch (error) {
    next(error);
  }
});


module.exports = router;


// added this file here copying sauces exactly for back end something