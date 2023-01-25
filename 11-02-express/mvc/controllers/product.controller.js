import { CashService } from "./services/cash.service.js";
import { ProductService } from "./services/product.service.js";

export class ProductController {
  buyProduct = (req, res) => {
    const cashService = new CashService();
    const hasCash = cashService.checkValue();
  
    const productService = new ProductService();
    const isSoldOut = productService.checkSoldoOut();
  
    if (hasCash && !isSoldOut) {
      return res.send('상품 구매 완료');
    }
  
    res.send('상품 구매 실패');
  }

  refundProduct = (req, res) => {
    const productService = new ProductService();
    const isSoldOut = productService.checkSoldoOut();
  
    if (isSoldOut) {
      return res.send('상품 환불 완료');
    }
  
    res.send('상품 환불 실패');
  }
}