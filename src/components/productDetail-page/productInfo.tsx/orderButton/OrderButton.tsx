'use client';

import React from 'react';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface OrderButtonProps {
  id: string;
  count: number;
  onClickCartBtn: () => void;
}

const OrderButton = (props: OrderButtonProps) => {
  const { id, count, onClickCartBtn } = props;

  return (
    <div className="flex w-full gap-2">
      <Button className="w-full h-[50px] font-semibold text-lg">
        <Link
          href={{
            pathname: '/ordersheet',
            query: {
              order: id,
              count: count,
            },
          }}
        >
          결제하기
        </Link>
      </Button>
      <Button className="w-[50px] h-[50px]" onClick={onClickCartBtn}>
        <ShoppingCart className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default OrderButton;
