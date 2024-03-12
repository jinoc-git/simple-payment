import React from 'react';

import DeliveryInfo from '@/components/orderSheet-page/orderInfo/deliveryInfo/DeliveryInfo';
import OrderPerson from '@/components/orderSheet-page/orderInfo/orderPerson/OrderPerson';

import OrderProductInfo from './orderProductInfo/OrderProductInfo';

import type { SearchParams } from '@/app/ordersheet/page';
import type { UserType } from '@/lib/database.types';

interface OrderInfoProps {
  user: UserType | null;
  searchParams: SearchParams;
}

const OrderInfo = async ({ user, searchParams }: OrderInfoProps) => {
  return (
    <section className="flex flex-col gap-4 w-[600px]">
      <OrderProductInfo searchParams={searchParams} />
      <OrderPerson user={user} />
      <DeliveryInfo user={user} />
    </section>
  );
};

export default OrderInfo;
