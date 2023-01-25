import { CashService } from "./services/cash.service.js";

export class CouponController {
  buyCoupon = (req, res) => {
    const cashService = new CashService();
    const hasCash = cashService.checkValue();
  
    if (hasCash) {
      return res.send('쿠폰 구매 완료');
    }
  
    res.send('쿠폰 구매 실패');
  }
}