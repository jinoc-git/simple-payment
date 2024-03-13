'use client';

import React from 'react';

import { Loader2 } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { UserType } from '@/lib/database.types';

interface OrderPersonProps {
  user: UserType | null;
}

const OrderPerson = ({ user }: OrderPersonProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg border-b-2">주문자 정보</CardTitle>
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
              <CardDescription>{user.email}</CardDescription>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderPerson;
