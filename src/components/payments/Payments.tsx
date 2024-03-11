'use client';

import React from 'react';

import OrderPerson from './orderPerson/OrderPerson';

import type { UserType } from '@/lib/database.types';

interface PaymentsProps {
  user: UserType | null;
}

const Payments = ({ user }: PaymentsProps) => {
  return (
    <section className=" w-[500px]">
      <OrderPerson user={user} />
    </section>
  );
};

export default Payments;
