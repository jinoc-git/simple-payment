import type { ProductType } from './database.types';

export const getOrderName = (orderList: ProductType[]) => {
  let orderName = '';
  const len = orderList.length;
  if (len === 1) orderName = orderList[0].info.name;
  else {
    const first = orderList[0].info.name;
    orderName = `${first} 외 ${len - 1}건`;
  }

  return orderName;
};
