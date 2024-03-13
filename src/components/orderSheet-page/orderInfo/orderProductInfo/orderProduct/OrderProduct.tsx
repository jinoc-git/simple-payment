'use client';

import React from 'react';

import { Truck } from 'lucide-react';
import Image from 'next/image';

import { addCommas } from '@/lib/changeNumberFormat';

import type { ProductInfoType } from '@/types/product.type';

interface OrderProductProps {
  count: number;
  image: string;
  info: ProductInfoType;
}

const OrderProduct = ({ image, info, count }: OrderProductProps) => {
  return (
    <div className=" border-t-2 space-y-2 pt-2">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{info.store}</p>
        <Truck />
      </div>
      <div className="flex gap-2">
        <Image
          className="w-[100px] h-[100px] object-cover"
          src={image}
          alt={`${info.name}`}
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-around">
          <p className="text-sm text-gray-600">판매처: {info.store}</p>
          <p className="font-semibold">{info.name}</p>
          <p className="text-sm text-gray-600">주문수량: {count}개</p>
          <p className="font-semibold text-blue-500">
            {addCommas(info.price * count)}원
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
