'use client';

import React, { useEffect, useState } from 'react';

import DeliveryInfoEdit from '@/components/common/dialog/deliveryEdit/DeliveryInfoEdit';
import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { CardDescription, CardFooter } from '@/components/ui/card';
import useToastModal from '@/hooks/useToastModal';
import { type DeliveryUser, orderStore } from '@/store/orderStore';

import DeliveryMemo from './deliveryMemo/DeliveryMemo';

import type { UserType } from '@/lib/database.types';

interface DeliveryInfoProps {
  user: UserType;
}

const DeliveryInfo = ({ user }: DeliveryInfoProps) => {
  const setDeliveryUser = orderStore(({ setDeliveryUser }) => setDeliveryUser);
  const { toast } = useToastModal();
  const [deliveryUserInfo, setDeliveryUserInfo] = useState<DeliveryUser>({
    name: user.username,
    phone: user.phone,
    address: user.address,
    detailAddress: user.detailAddress,
  });

  const changeDeliveryInfo = (changedUser: DeliveryUser) => {
    if (!changedUser.name) {
      toast.warning('받는 분 성함을 입력해 주세요', 2000);
      return;
    }
    if (!changedUser.phone) {
      toast.warning('받는 분 전화번호를 입력해 주세요', 2000);
      return;
    }
    if (!changedUser.address) {
      toast.warning('받는 분 주소를 입력해 주세요', 2000);
      return;
    }
    toast.default('수정 완료!', 2000);
    setDeliveryUserInfo(changedUser);
    setDeliveryUser(changedUser);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDeliveryUserInfo({ ...deliveryUserInfo, [id]: value });
  };

  useEffect(() => {
    setDeliveryUser(deliveryUserInfo);
    setDeliveryUserInfo(deliveryUserInfo);
  }, [user]);

  return (
    <OrdersheetContent
      title="배송 정보"
      footer={
        <CardFooter>
          <DeliveryMemo />
        </CardFooter>
      }
    >
      <div className="flex justify-between">
        <div className=" space-y-2">
          <p>{deliveryUserInfo.name}</p>
          <CardDescription>{deliveryUserInfo.phone}</CardDescription>
          <p>{deliveryUserInfo.address ?? '주소를 입력해 주세요.'}</p>
          {deliveryUserInfo.detailAddress ?? (
            <p>{deliveryUserInfo.detailAddress}</p>
          )}
        </div>
        <DeliveryInfoEdit
          user={deliveryUserInfo}
          changeDeliveryInfo={changeDeliveryInfo}
          onChangeInput={onChangeInput}
        />
      </div>
    </OrdersheetContent>
  );
};

export default DeliveryInfo;
