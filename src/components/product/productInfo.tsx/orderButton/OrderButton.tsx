'use client';

import React from 'react';

import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface OrderButtonProps {
  onClickPayBtn: () => void;
  onClickCartBtn: () => void;
}

const OrderButton = (props: OrderButtonProps) => {
  const { onClickPayBtn, onClickCartBtn } = props;

  return (
    <div className="flex w-full gap-2">
      <Button
        className="w-full h-[50px] font-semibold text-lg"
        onClick={onClickPayBtn}
      >
        결제하기
      </Button>
      <Button className="w-[50px] h-[50px]" onClick={onClickCartBtn}>
        <ShoppingCart className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default OrderButton;
