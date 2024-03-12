'use client';

import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { addCommas } from '@/lib/changeNumberFormat';

import TotalPrice from './totalPrice/TotalPrice';

import type { ProductInfoType } from '@/types/product.type';

interface ProductInfoProps {
  id: string;
  info: ProductInfoType;
}

const ProductInfo = ({ id, info }: ProductInfoProps) => {
  const { name, store, price, desc } = info;

  return (
    <Card className="w-[400px] min-h-[370px]">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>판매처 : {store}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
        <p className="mt-3 text-right text-2xl text-red-500 font-semibold">
          {addCommas(price)} 원
        </p>
      </CardContent>
      <CardFooter>
        <TotalPrice price={price} id={id} />
      </CardFooter>
    </Card>
  );
};

export default ProductInfo;
