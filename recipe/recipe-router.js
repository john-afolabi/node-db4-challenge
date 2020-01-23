const express = require("express");
const {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
} = require("./recipe-model");
const router = express.Router();

router.get("/", (req, res) => {
  getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to recieve recieve recipes at this moment`
      });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  getShoppingList(req.params.id)
    .then(shoppinglist => {
      res.status(200).json(shoppinglist);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to retrieve shopping list at this moment`
      });
    });
});

router.get("/:id/instructions", (req, res) => {
  getInstructions(req.params.id)
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Unable to retrieve cooking instructions at this moment`
      });
    });
});

module.exports = router;
