'use client';

import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { SearchParams } from '@/app/ordersheet/page';
import type { ProductType } from '@/lib/database.types';

interface OrderProductInfoProps {
  productList?: ProductType[] | null;
  searchParams: SearchParams;
}

const OrderProductInfo = ({
  searchParams,
  productList,
}: OrderProductInfoProps) => {
  console.log(searchParams);
  console.log(productList);

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
