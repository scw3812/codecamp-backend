export class CouponController {
  constructor(moneyService) {
    this.moneyService = moneyService;
  }

  buyCoupon = (req, res) => {
    const hasCash = this.moneyService.checkValue();
  
    if (hasCash) {
      return res.send('쿠폰 구매 완료');
    }
  
    res.send('쿠폰 구매 실패');
  }
}