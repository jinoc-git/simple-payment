import React from 'react';

import { redirect } from 'next/navigation';

import Product from '@/components/product/Product';
import { getAuthSession, getUserFromServer } from '@/lib/serverActions';

export default async function Cart() {
  const session = await getAuthSession();
  if (!session) redirect('/signin');

  const user = await getUserFromServer(session);

  return (
    <main className="min-h-[calc(100vh-48px)] bg-gray-100">
      <div className="flex-box w-full h-[60px]">
        <h2 className="text-2xl font-bold text-gray-700">결제하기</h2>
      </div>
      <Product />
    </main>
  );
}
