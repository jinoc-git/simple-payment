'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import DeliveryInfo from '@/components/orderSheet-page/orderInfo/deliveryInfo/DeliveryInfo';
import OrderPerson from '@/components/orderSheet-page/orderInfo/orderPerson/OrderPerson';
import { getUserFromClient } from '@/lib/auth';

import CouponAndPoint from './couponAndPoint/CouponAndPoint';
import OrderProductsInfo from './orderProductInfo/OrderProductsInfo';

import type { CouponType, ProductType } from '@/lib/database.types';

interface OrderInfoProps {
  userId: string;
  productList: ProductType[];
  countList: string[];
  myCouponList: CouponType[];
}

const OrderInfo = ({
  userId,
  productList,
  countList,
  myCouponList,
}: OrderInfoProps) => {
  const { data: user } = useQuery({
    queryKey: ['curUser'],
    queryFn: () => getUserFromClient(userId),
  });

  if (!user) return;

  return (
    <section className="flex flex-col gap-4 w-[570px]">
      <OrderProductsInfo countList={countList} productList={productList} />
      <OrderPerson user={user} />
      <DeliveryInfo user={user} />
      <CouponAndPoint user={user} myCouponList={myCouponList} />
    </section>
  );
};

export default OrderInfo;
