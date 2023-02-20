const express = require("express");

const router = express.Router();
const {
  getAllCarts,
  getCartById,
  updateCartById,
  createNewCart,
  addProductToCart,
  deleteCartById,
  deleteOneProductFromCart,
} = require("../controllers/cartController");

router.get("/:cartId", getCartById);
router.get("/", getAllCarts);
router.post("/", createNewCart);
router.put("/:cartId", updateCartById);
router.delete("/:cartId", deleteCartById);
router.put("/:cartId/products", addProductToCart);
router.delete("/:cartId/products", deleteOneProductFromCart);

module.exports = router;
