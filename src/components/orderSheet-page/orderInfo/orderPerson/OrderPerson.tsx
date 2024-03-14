'use client';

import React, { useEffect } from 'react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardDescription } from '@/components/ui/card';
import { orderStore } from '@/store/orderStore';

import type { UserType } from '@/lib/database.types';

interface OrderPersonProps {
  user: UserType;
}

const OrderPerson = ({ user }: OrderPersonProps) => {
  const setOrderUser = orderStore(({ setOrderUser }) => setOrderUser);

  useEffect(() => {
    setOrderUser(user);
  }, [user]);

  return (
    <OrdersheetContent title="주문자 정보">
      <p>{user.username}</p>
      <CardDescription>{user.phone}</CardDescription>
      <CardDescription>{user.email}</CardDescription>
    </OrdersheetContent>
  );
};

export default OrderPerson;
