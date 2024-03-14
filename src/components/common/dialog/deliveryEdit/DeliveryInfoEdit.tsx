'use client';

import React, { useState } from 'react';

import { DialogClose } from '@radix-ui/react-dialog';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { DeliveryUser } from '@/store/orderStore';

interface DeliveryInfoEditProps {
  user: DeliveryUser;

  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeDeliveryInfo: (changedUser: DeliveryUser) => void;
}

const DeliveryInfoEdit = ({
  user,
  changeDeliveryInfo,
}: DeliveryInfoEditProps) => {
  const [deliveryUserInfo, setDeliveryUserInfo] = useState<DeliveryUser>(user);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDeliveryUserInfo({ ...deliveryUserInfo, [id]: value });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'sm'} variant={'secondary'}>
          수정
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>배송 정보 변경</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            성함 *
          </Label>
          <Input
            id="name"
            placeholder="받는 분 성함"
            defaultValue={user.name}
            onChange={onChangeInput}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="phone" className="text-right">
            전화번호 *
          </Label>
          <Input
            id="phone"
            placeholder="전화번호"
            defaultValue={user.phone}
            onChange={onChangeInput}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="address" className="text-right">
            주소 *
          </Label>
          <Input
            id="address"
            placeholder="주소"
            defaultValue={user.address ?? ''}
            onChange={onChangeInput}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="detailAddress" className="text-right">
            상세 주소
          </Label>
          <Input
            id="detailAddress"
            placeholder="상세 주소"
            defaultValue={user.detailAddress ?? ''}
            onChange={onChangeInput}
            className="col-span-3"
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>닫기</Button>
          </DialogClose>
          <Button
            type="button"
            onClick={() => changeDeliveryInfo(deliveryUserInfo)}
          >
            저장하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryInfoEdit;
