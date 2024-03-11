'use client';

import React from 'react';

import DeliveryInfo from './deliveryInfo/DeliveryInfo';
import OrderPerson from './orderPerson/OrderPerson';
import PaymentsInfo from './paymentsInfo/PaymentsInfo';

import type { UserType } from '@/lib/database.types';

interface PaymentsProps {
  user: UserType | null;
}

const Payments = ({ user }: PaymentsProps) => {
  return (
    <section className="flex flex-col gap-4 w-[500px] pl-5">
      <OrderPerson user={user} />
      <DeliveryInfo user={user} />
      <PaymentsInfo />
    </section>
  );
};

export default Payments;
