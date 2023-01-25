import express from "express";

import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";

const app = express();

const productController = new ProductController();
app.post("/products/buy", productController.buyProduct);
app.post("/products/refund", productController.refundProduct);

const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000);