'use client';

import React, { useState } from 'react';

import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addCommas } from '@/lib/changeNumberFormat';
import { orderStore } from '@/store/orderStore';

interface PointProps {
  point: number;
}

const Point = ({ point }: PointProps) => {
  const setUsingPoint = orderStore(({ setUsingPoint }) => setUsingPoint);
  const [usePoint, setUsePoint] = useState(0);

  const onChangePoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setUsePoint(+val);
  };
  const useTotalPoint = () => {
    setUsePoint(point);
  };
  const onClickX = () => {
    setUsePoint(0);
    setUsingPoint(0);
  };
  const onClickUsePoint = () => {
    setUsingPoint(usePoint);
  };

  return (
    <div className=" space-y-2">
      <div className="flex justify-between gap-2 w-full ">
        <div className="w-full relative">
          <Input onChange={onChangePoint} value={addCommas(usePoint)} />
          <Button
            type="button"
            size={'sm'}
            variant={'outline'}
            onClick={useTotalPoint}
            disabled={usePoint >= point}
            className=" absolute text-xs top-0 right-0 h-[40px]"
          >
            전액 사용
          </Button>
          <Button
            type="button"
            size={'icon'}
            variant={'outline'}
            onClick={onClickX}
            className=" absolute rounded-full w-6 h-6 top-2 right-[84px]"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <Button
          type="button"
          variant={'outline'}
          onClick={onClickUsePoint}
          disabled={usePoint > point}
          className=" text-gray-700 font-semibold"
        >
          포인트 사용
        </Button>
      </div>
      <p className=" text-gray-700 text-sm">
        보유 포인트:{' '}
        <span className=" font-semibold">{addCommas(point)}원</span>
      </p>
    </div>
  );
};

export default Point;
