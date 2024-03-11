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

interface ProductInfoProps {
  name: string;
  store: string;
  price: number;
  desc: string;
}

const ProductInfo = (props: ProductInfoProps) => {
  const { name, store, price, desc } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>판매처 : {store}</CardDescription>
      </CardHeader>
      <CardContent>{desc}</CardContent>
      <CardFooter>
        <p className=" font-semibold">{addCommas(price)} 원</p>
      </CardFooter>
    </Card>
  );
};

export default ProductInfo;
