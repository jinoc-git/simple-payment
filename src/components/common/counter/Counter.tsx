'use client';

import React from 'react';

import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ count, setCount }: CounterProps) => {
  const onClickCountBtn = (adjustment: number) => {
    setCount(Math.max(1, Math.min(50, count + adjustment)));
  };

  return (
    <div className="flex items-center gap-3 w-full border-y py-2">
      <Button
        variant={'outline'}
        size={'icon'}
        className="w-8 h-8"
        onClick={() => onClickCountBtn(-1)}
        disabled={count === 1}
      >
        <Minus className="w-4 h-4" />
      </Button>
      <div>
        <p className=" text-xl">{count}</p>
      </div>
      <Button
        variant={'outline'}
        size={'icon'}
        className="w-8 h-8"
        onClick={() => onClickCountBtn(1)}
        disabled={count === 50}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Counter;
