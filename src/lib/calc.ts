import type { ProductType } from './database.types';

export const calcTotalPrice = (
  productList: ProductType[],
  countList: string[],
) => {
  let totalPrice = 0;

  for (let i = 0; i < productList.length; i++) {
    const price = productList[i].info.price;
    const count = countList[i];
    const deliveryAmount = productList[i].info.deliveryAmount;
    totalPrice += price * +count + deliveryAmount;
  }

  return totalPrice;
};
