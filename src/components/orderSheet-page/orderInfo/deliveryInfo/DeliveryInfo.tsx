'use client';

import React from 'react';

import { Loader2 } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import DeliveryMemo from './deliveryMemo/DeliveryMemo';

import type { UserType } from '@/lib/database.types';

interface DeliveryInfo {
  user: UserType | null;
}

const DeliveryInfo = ({ user }: DeliveryInfo) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg border-b-2">배송 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {user === null ? (
            <div className="flex-box h-[72px]">
              <Loader2 className=" animate-spin" />
            </div>
          ) : (
            <>
              <p>{user.username}</p>
              <CardDescription>{user.phone}</CardDescription>
              <p>{user.address ?? '주소를 입력해 주세요.'}</p>
              {user.detailAddress ?? <p>{user.detailAddress}</p>}
            </>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <DeliveryMemo />
      </CardFooter>
    </Card>
  );
};

export default DeliveryInfo;
