'use client';

import React from 'react';

import { Loader2 } from 'lucide-react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardDescription } from '@/components/ui/card';

import type { UserType } from '@/lib/database.types';

interface OrderPersonProps {
  user: UserType | null;
}

const OrderPerson = ({ user }: OrderPersonProps) => {
  return (
    <OrdersheetContent title="주문자 정보">
      {user === null ? (
        <div className="flex-box h-[72px]">
          <Loader2 className=" animate-spin" />
        </div>
      ) : (
        <>
          <p>{user.username}</p>
          <CardDescription>{user.phone}</CardDescription>
          <CardDescription>{user.email}</CardDescription>
        </>
      )}
    </OrdersheetContent>
  );
};

export default OrderPerson;
