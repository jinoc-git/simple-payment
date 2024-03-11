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
        <CardTitle>{name}</CardTitle>
        <CardDescription>{store}</CardDescription>
      </CardHeader>
      <CardContent>{desc}</CardContent>
      <CardFooter>{price} 원</CardFooter>
    </Card>
  );
};

export default ProductInfo;
