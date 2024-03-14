'use client';

import React from 'react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardFooter } from '@/components/ui/card';
import { orderStore } from '@/store/orderStore';

import Desc from './desc/Desc';

const PaymentsInfo = () => {
  const { deliveryAmount, orderPrice, coupon, usingPoint, finalPrice } =
    orderStore();

  return (
    <OrdersheetContent
      title="최종 결제 금액"
      footer={<CardFooter></CardFooter>}
    >
      <Desc name="상품 가격" content={`${orderPrice}원`} />
      <Desc name="쿠폰 할인" content={`-${coupon.discount}원`} />
      <Desc name="포인트 사용" content={`-${usingPoint}원`} />
      <Desc name="배송비" content={`${deliveryAmount}원`} />
      <p>배송비 제외: {finalPrice}</p>
      <p>최종: {deliveryAmount + finalPrice}</p>
    </OrdersheetContent>
  );
};

export default PaymentsInfo;
