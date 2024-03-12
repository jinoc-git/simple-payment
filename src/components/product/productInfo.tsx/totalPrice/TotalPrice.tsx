'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import Counter from '@/components/common/counter/Counter';
import { addCommas } from '@/lib/changeNumberFormat';

import OrderButton from '../orderButton/OrderButton';

interface TotalPriceProps {
  id: string;
  price: number;
}

const TotalPrice = ({ price, id }: TotalPriceProps) => {
  const [count, setCount] = useState(1);

  const router = useRouter();

  const onClickPayBtn = () => {
    router.push(`/ordersheet?order=${id}&count=${count}`);
  };

  const onClickCartBtn = () => {};

  return (
    <div className="w-full space-y-3">
      <Counter count={count} setCount={setCount} />
      <div className="flex items-center justify-between">
        <p className=" text-sm font-semibold">총 상품 금액</p>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">{`총 수량 ${count}개`}</p>
          <p className="text-lg text-red-500 font-semibold">
            {addCommas(price * count)}원
          </p>
        </div>
      </div>
      <OrderButton
        onClickPayBtn={onClickPayBtn}
        onClickCartBtn={onClickCartBtn}
      />
    </div>
  );
};

export default TotalPrice;
