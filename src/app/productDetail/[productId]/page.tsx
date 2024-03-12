import React from 'react';

import Product from '@/components/product/Product';

interface ProductDetailProps {
  params: { productId: string };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { productId } = params;

  return (
    <main className=" w-full min-h-[calc(100vh-48px)] bg-gray-100">
      <div className="flex-box w-full h-[60px]">
        <h2 className="text-2xl font-bold text-gray-700">상품 상세</h2>
      </div>
      <div className="flex justify-center gap-5 p-5">
        <Product />
      </div>
    </main>
  );
}
