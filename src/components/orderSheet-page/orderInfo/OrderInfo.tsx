import React from 'react';

import DeliveryInfo from '@/components/orderSheet-page/orderInfo/deliveryInfo/DeliveryInfo';
import OrderPerson from '@/components/orderSheet-page/orderInfo/orderPerson/OrderPerson';
import { getProductListByIds } from '@/lib/serverActions';

import CouponAndPoint from './couponAndPoint/CouponAndPoint';
import OrderProductsInfo from './orderProductInfo/OrderProductsInfo';

import type { SearchParams } from '@/app/ordersheet/page';
import type { UserType } from '@/lib/database.types';

interface OrderInfoProps {
  user: UserType | null;
  searchParams: SearchParams;
}

const OrderInfo = async ({ user, searchParams }: OrderInfoProps) => {
  const { order, count } = searchParams;
  const ids = typeof order === 'string' ? [order] : order;

  const productList = await getProductListByIds(ids);
  const countList = typeof count === 'string' ? [count] : count;

  return (
    <section className="flex flex-col gap-4 w-[600px]">
      <OrderProductsInfo countList={countList} productList={productList} />
      <OrderPerson user={user} />
      <DeliveryInfo user={user} />
      <CouponAndPoint />
    </section>
  );
};

export default OrderInfo;
