'use client';

import React, { useState } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Desc from './desc/Desc';
import Counter from '../../common/counter/Counter';

const PaymentsInfo = () => {
  const [count, setCount] = useState(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">최종 결제 금액</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Desc name="상품 가격" content={`원`} />
        <Desc name="쿠폰 할인" content={`-원`} />
        <Desc name="포인트 사용" content={`-원`} />
        <Desc name="배송비" content={`2500원`} />
        <Counter count={count} setCount={setCount} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default PaymentsInfo;
