'use client';

import React, { useEffect, useState } from 'react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardFooter } from '@/components/ui/card';
import { addCommas } from '@/lib/changeNumberFormat';
import { orderStore } from '@/store/orderStore';

import Desc from './desc/Desc';
import TossPayment from '../tossPayment/TossPayment';

const PaymentsInfo = () => {
  const { finalPrice, deliveryAmount, orderPrice, coupon, usingPoint } =
    orderStore();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isFixed ? ' fixed top-5' : ' static'} w-[450px] space-y-4`}
    >
      <OrdersheetContent
        title="최종 결제 금액"
        footer={
          <CardFooter className="flex flex-col gap-2">
            <div className=" flex items-center justify-between w-full">
              <p className=" font-semibold">최종 결제 금액: </p>
              <p className=" text-xl font-semibold text-red-500">
                {addCommas(finalPrice + deliveryAmount)}원
              </p>
            </div>
          </CardFooter>
        }
      >
        <Desc name="상품 가격" content={`${addCommas(orderPrice)}원`} />
        <Desc name="쿠폰 할인" content={`-${addCommas(coupon.discount)}원`} />
        <Desc name="포인트 사용" content={`-${addCommas(usingPoint)}원`} />
        <Desc name="배송비" content={`${addCommas(deliveryAmount)}원`} />
      </OrdersheetContent>
      <TossPayment />
    </div>
  );
};

export default PaymentsInfo;
