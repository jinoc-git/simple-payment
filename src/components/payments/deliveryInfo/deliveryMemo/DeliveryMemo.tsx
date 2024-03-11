'use client';

import React, { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const DeliveryMemo = () => {
  const [isDirectInput, setIsDirectInput] = useState(false);
  const [memo, setMemo] = useState('');

  const onValueChange = (val: string) => {
    if (val === '직접 입력') {
      setIsDirectInput(true);
      setMemo('');
    } else {
      setIsDirectInput(false);
      setMemo(val);
    }
  };

  const onChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  };

  return (
    <div className="w-full space-y-2">
      <p>배송 메모</p>
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="배송 메모 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="경비실에 맡겨주세요.">
              경비실에 맡겨주세요.
            </SelectItem>
            <SelectItem value="현관문 앞에 놓아주세요.">
              현관문 앞에 놓아주세요.
            </SelectItem>
            <SelectItem value="직접 입력">직접 입력</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {isDirectInput && (
        <Input
          placeholder="배송 메모를 입력해 주세요."
          onChange={onChangeMemo}
        />
      )}
    </div>
  );
};

export default DeliveryMemo;
