export class ProductController {
  constructor(moneyService, productService) {
    this.moneyService = moneyService;
    this.productService = productService;
  }

  buyProduct = (req, res) => {
    const hasMoney = this.moneyService.checkValue();
    const isSoldOut = this.productService.checkSoldoOut();
  
    if (hasMoney && !isSoldOut) {
      return res.send('상품 구매 완료');
    }
  
    res.send('상품 구매 실패');
  }

  refundProduct = (req, res) => {
    const isSoldOut = this.productService.checkSoldoOut();
  
    if (isSoldOut) {
      return res.send('상품 환불 완료');
    }
  
    res.send('상품 환불 실패');
  }
}