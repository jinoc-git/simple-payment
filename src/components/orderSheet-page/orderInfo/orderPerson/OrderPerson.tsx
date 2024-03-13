'use client';

import React from 'react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardDescription } from '@/components/ui/card';

import type { UserType } from '@/lib/database.types';

interface OrderPersonProps {
  user: UserType;
}

const OrderPerson = ({ user }: OrderPersonProps) => {
  return (
    <OrdersheetContent title="주문자 정보">
      <p>{user.username}</p>
      <CardDescription>{user.phone}</CardDescription>
      <CardDescription>{user.email}</CardDescription>
    </OrdersheetContent>
  );
};

export default OrderPerson;
