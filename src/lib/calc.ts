import type { CouponType, ProductType } from './database.types';

export const calcTotalPrice = (
  productList: ProductType[],
  countList: string[],
) => {
  let totalPrice = 0;

  for (let i = 0; i < productList.length; i++) {
    const price = productList[i].info.price;
    const count = countList[i];
    totalPrice += price * +count;
  }

  return totalPrice;
};

export const calcDeliveryAmount = (productList: ProductType[]) => {
  const totalDeliveryAmount = productList.reduce(
    (acc, cur) => acc + cur.info.deliveryAmount,
    0,
  );

  return totalDeliveryAmount;
};

export const calcCouponDiscountAmount = (
  orderPrice: number,
  coupon: CouponType,
) => {
  const { discount_type, discount } = coupon;

  if (discount_type === 'amount') return discount;
  else return Math.round(orderPrice * (discount / 100));
};

export const calcSavePoint = (amount: number) => {
  const savePoint = Math.round((amount / 100) * 2);
  return savePoint;
};
