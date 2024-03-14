'use client';

import React, { useEffect } from 'react';

import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardFooter } from '@/components/ui/card';
import { calcDeliveryAmount, calcTotalPrice } from '@/lib/calc';
import { addCommas } from '@/lib/changeNumberFormat';
import { orderStore } from '@/store/orderStore';

import OrderProduct from './orderProduct/OrderProduct';

import type { ProductType } from '@/lib/database.types';

interface OrderProductInfoProps {
  productList: ProductType[];
  countList: string[];
}

const OrderProductsInfo = ({
  countList,
  productList,
}: OrderProductInfoProps) => {
  const {
    deliveryAmount,
    orderPrice,
    setOrderList,
    setCountList,
    setOrderPrice,
    setDeliveryAmount,
    setAfterCouponPrice,
    setFinalPrice,
  } = orderStore();

  useEffect(() => {
    const orderAmount = calcTotalPrice(productList, countList);
    const deliveryPrice = calcDeliveryAmount(productList);
    setOrderList(productList);
    setCountList(countList);
    setOrderPrice(orderAmount);
    setDeliveryAmount(deliveryPrice);
    setAfterCouponPrice(orderAmount + deliveryPrice);
    setFinalPrice(orderAmount);
  }, []);

  return (
    <OrdersheetContent
      title="주문 상품"
      footer={
        <CardFooter className="flex justify-between">
          <p className="text-[17px] font-semibold">주문금액</p>
          <p>{addCommas(deliveryAmount + orderPrice)}원</p>
        </CardFooter>
      }
    >
      {productList.map(({ images, info }, idx) => {
        const count = countList[idx];
        return (
          <OrderProduct
            key={uuid()}
            info={info}
            image={images[0]}
            count={+count}
          />
        );
      })}
    </OrdersheetContent>
  );
};

export default OrderProductsInfo;
