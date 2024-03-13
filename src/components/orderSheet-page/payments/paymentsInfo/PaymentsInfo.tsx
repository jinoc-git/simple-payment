'use client';

import React from 'react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardFooter } from '@/components/ui/card';

import Desc from './desc/Desc';

const PaymentsInfo = () => {
  return (
    <OrdersheetContent
      title="최종 결제 금액"
      footer={<CardFooter></CardFooter>}
    >
      <Desc name="상품 가격" content={`원`} />
      <Desc name="쿠폰 할인" content={`-원`} />
      <Desc name="포인트 사용" content={`-원`} />
      <Desc name="배송비" content={`2500원`} />
    </OrdersheetContent>
  );
};

export default PaymentsInfo;
