'use client';

import React, { useState } from 'react';

import Counter from '@/components/common/counter/Counter';
import { addCommas } from '@/lib/changeNumberFormat';

import OrderButton from '../orderButton/OrderButton';

interface TotalPriceProps {
  id: string;
  price: number;
  deliveryAmount: number;
}

const TotalPrice = ({ price, id, deliveryAmount }: TotalPriceProps) => {
  const [count, setCount] = useState(1);

  const onClickCartBtn = () => {};

  return (
    <div className="w-full space-y-3">
      <Counter count={count} setCount={setCount} />
      <p className="text-sm text-gray-500">
        택배배송 &nbsp;
        <span className="text-sm font-semibold text-black">
          {addCommas(deliveryAmount)}원
        </span>
        &nbsp; (주문시 결제)
      </p>
      <div className="flex items-center justify-between">
        <p className=" text-sm font-semibold">총 상품 금액</p>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">{`총 수량 ${count}개`}</p>
          <p className="text-lg text-red-500 font-semibold">
            {addCommas(price * count)}원
          </p>
        </div>
      </div>
      <OrderButton id={id} count={count} onClickCartBtn={onClickCartBtn} />
    </div>
  );
};

export default TotalPrice;
