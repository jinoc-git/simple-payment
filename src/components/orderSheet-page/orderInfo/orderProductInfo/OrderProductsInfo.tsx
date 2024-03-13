'use client';

import React from 'react';

import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { calcTotalPrice } from '@/lib/calc';
import { addCommas } from '@/lib/changeNumberFormat';

import OrderProduct from './orderProduct/OrderProduct';

import type { ProductType } from '@/lib/database.types';

interface OrderProductInfoProps {
  productList: ProductType[] | null;
  countList: string[];
}

const OrderProductsInfo = ({
  countList,
  productList,
}: OrderProductInfoProps) => {
  if (!productList) return <div>오류</div>;

  console.log(productList);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg border-b-2">주문 상품</CardTitle>
      </CardHeader>
      <CardContent className=" space-y-3">
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
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-[17px] font-semibold">주문금액</p>
        <p>{addCommas(calcTotalPrice(productList, countList))}원</p>
      </CardFooter>
    </Card>
  );
};

export default OrderProductsInfo;
