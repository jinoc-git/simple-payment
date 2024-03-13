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
    <div className=" border-b-2 space-y-2 pb-2">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{info.store}</p>
        <div className="flex gap-2 items-center">
          <Truck className=" w-5 h-5 stroke-blue-500" />
          <p className=" text-sm font-normal text-blue-500">
            {addCommas(info.deliveryAmount)}원
          </p>
        </div>
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
