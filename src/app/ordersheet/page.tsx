import React from 'react';

import { redirect } from 'next/navigation';

import OrderInfo from '@/components/orderSheet-page/orderInfo/OrderInfo';
import Payments from '@/components/orderSheet-page/payments/Payments';
import { getAuthSession, getUserFromServer } from '@/lib/serverActions';

export type SearchParams = { [key: string]: string | string[] };

interface OrderSheetProps {
  params: {};
  searchParams: SearchParams;
}

export default async function OrderSheet(props: OrderSheetProps) {
  const session = await getAuthSession();
  if (!session) redirect('/signin');

  const user = await getUserFromServer(session);

  return (
    <main className="min-h-[calc(100vh-48px)] bg-gray-100">
      <div className="flex-box w-full h-[60px]">
        <h2 className="text-2xl font-bold text-gray-700">주문 / 결제</h2>
      </div>
      <div className="flex justify-between w-[1080px] gap-5 p-5 mx-auto">
        <OrderInfo user={user} searchParams={props.searchParams} />
        <Payments />
      </div>
    </main>
  );
}
