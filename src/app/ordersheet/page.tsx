import React from 'react';

import { redirect } from 'next/navigation';

import OrderInfo from '@/components/orderSheet-page/orderInfo/OrderInfo';
import Payments from '@/components/orderSheet-page/payments/Payments';
import {
  getAuthSession,
  getMyCoupons,
  getProductListByIds,
  getUserFromServer,
} from '@/lib/serverActions';

export type SearchParams = { [key: string]: string | string[] };

interface OrderSheetProps {
  params: {};
  searchParams: SearchParams;
}

export const revalidate = 1800;

export default async function OrderSheet({ searchParams }: OrderSheetProps) {
  const session = await getAuthSession();
  if (!session) redirect('/signin');
  if (Object.keys(searchParams).length < 2) redirect('/');

  const user = await getUserFromServer(session);
  if (!user) redirect('/');

  const myCouponList = await getMyCoupons(user.id);

  const { order, count } = searchParams;
  const ids = typeof order === 'string' ? [order] : order;

  const productList = await getProductListByIds(ids);
  const countList = typeof count === 'string' ? [count] : count;

  if (!productList) redirect('/');

  return (
    <main className="min-h-[calc(100vh-48px)] bg-gray-100">
      <div className="flex-box w-full h-[60px]">
        <h2 className="text-2xl font-bold text-gray-700">주문 / 결제</h2>
      </div>
      <div className="flex justify-between w-[1080px] gap-5 p-5 mx-auto">
        <OrderInfo
          userId={user.id}
          productList={productList}
          countList={countList}
          myCouponList={myCouponList}
        />
        <Payments />
      </div>
    </main>
  );
}
