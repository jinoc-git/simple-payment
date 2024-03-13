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

import OrderProduct from './orderProduct/OrderProduct';

import type { SearchParams } from '@/app/ordersheet/page';
import type { ProductType } from '@/lib/database.types';

interface OrderProductInfoProps {
  productList: ProductType[] | null;
  searchParams: SearchParams;
}

const OrderProductsInfo = ({
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
      <CardContent className=" space-y-3">
        {productList?.map(({ images, info }, idx) => {
          const count = searchParams.count[idx];
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
      <CardFooter></CardFooter>
    </Card>
  );
};

export default OrderProductsInfo;
