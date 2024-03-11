import React from 'react';

import Product from '@/components/product/Product';

export default async function Cart() {
  return (
    <main>
      <div className="flex-box w-full h-[60px]">
        <h2 className="text-2xl font-bold text-gray-700">결제하기</h2>
      </div>
      <Product />
    </main>
  );
}
