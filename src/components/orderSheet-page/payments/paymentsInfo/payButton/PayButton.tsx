'use client';

import React from 'react';

import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

import { Button } from '@/components/ui/button';
import { usePaymentWidget } from '@/hooks/usePaymentWidget';
import { getOrderName } from '@/lib/getOrderName';
import { orderStore } from '@/store/orderStore';

const PayButton = () => {
  const { data: paymentWidget } = usePaymentWidget();
  const { orderUser, orderList } = orderStore();

  const onClickPay = async () => {
    try {
      await paymentWidget?.requestPayment({
        orderId: uuid(),
        orderName: getOrderName(orderList),
        customerName: orderUser?.username,
        customerEmail: orderUser?.email,
        customerMobilePhone: orderUser?.phone,
        successUrl: `${window.location.origin}/ordersheet/success`,
        failUrl: `${window.location.origin}/ordersheet/fail`,
      });
    } catch (error) {
      // 에러 처리하기
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <Button size={'lg'} className="w-full" onClick={onClickPay}>
        결제하기
      </Button>
    </div>
  );
};

export default PayButton;
