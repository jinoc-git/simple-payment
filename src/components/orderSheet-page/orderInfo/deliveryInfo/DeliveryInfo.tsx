'use client';

import React from 'react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardDescription, CardFooter } from '@/components/ui/card';

import DeliveryMemo from './deliveryMemo/DeliveryMemo';

import type { UserType } from '@/lib/database.types';

interface DeliveryInfo {
  user: UserType;
}

const DeliveryInfo = ({ user }: DeliveryInfo) => {
  return (
    <OrdersheetContent
      title="배송 정보"
      footer={
        <CardFooter>
          <DeliveryMemo />
        </CardFooter>
      }
    >
      <p>{user.username}</p>
      <CardDescription>{user.phone}</CardDescription>
      <p>{user.address ?? '주소를 입력해 주세요.'}</p>
      {user.detailAddress ?? <p>{user.detailAddress}</p>}
    </OrdersheetContent>
  );
};

export default DeliveryInfo;
