'use client';

import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { SearchParams } from '@/app/ordersheet/page';

interface OrderProductInfoProps {
  searchParams: SearchParams;
}

const OrderProductInfo = ({ searchParams }: OrderProductInfoProps) => {
  console.log(searchParams);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">주문 상품</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default OrderProductInfo;
