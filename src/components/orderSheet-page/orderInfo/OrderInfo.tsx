import React from 'react';

import DeliveryInfo from '@/components/orderSheet-page/orderInfo/deliveryInfo/DeliveryInfo';
import OrderPerson from '@/components/orderSheet-page/orderInfo/orderPerson/OrderPerson';

import type { ProductType, UserType } from '@/lib/database.types';

interface OrderInfoProps {
  user: UserType | null;
  productList?: ProductType | null;
}

const OrderInfo = ({ user, productList }: OrderInfoProps) => {
  return (
    <section className="flex flex-col gap-4 w-[600px]">
      <OrderPerson user={user} />
      <DeliveryInfo user={user} />
    </section>
  );
};

export default OrderInfo;
