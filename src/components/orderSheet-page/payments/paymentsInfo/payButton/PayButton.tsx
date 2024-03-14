'use client';

import React from 'react';

import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

import { Button } from '@/components/ui/button';
import { usePaymentWidget } from '@/hooks/usePaymentWidget';
import useToastModal from '@/hooks/useToastModal';
import { getOrderName } from '@/lib/getOrderName';
import { orderStore } from '@/store/orderStore';

const PayButton = () => {
  const { data: paymentWidget } = usePaymentWidget();
  const { toast } = useToastModal();
  const { deliveryUser, orderUser, orderList } = orderStore();

  const onClickPay = async () => {
    if (!deliveryUser?.name) {
      toast.warning('받는 분 성함을 입력해 주세요', 2000);
      return;
    }
    if (!deliveryUser?.phone) {
      toast.warning('받는 분 전화번호를 입력해 주세요', 2000);
      return;
    }
    if (!deliveryUser?.address) {
      toast.warning('받는 분 주소를 입력해 주세요', 2000);
      return;
    }

    try {
      await paymentWidget?.requestPayment({
        orderId: uuid(),
        orderName: getOrderName(orderList),
        customerName: orderUser?.username,
        customerEmail: orderUser?.email,
        customerMobilePhone:
          orderUser?.phone === '' ? deliveryUser.phone : orderUser?.phone,
        showCustomerMobilePhone: true,
        shipping: {
          fullName: deliveryUser.name,
          address: {
            country: 'KR',
            area2: deliveryUser.address,
            line2: deliveryUser.detailAddress ?? '없음',
          },
        },
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
