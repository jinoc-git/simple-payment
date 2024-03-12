import React from 'react';

import ProductImages from './productImages/ProductImages';
import ProductInfo from './productInfo.tsx/ProductInfo';

import type { ProductType } from '@/lib/database.types';

interface ProductProps {
  product: ProductType | null;
}

const Product = async ({ product }: ProductProps) => {
  if (!product) {
    return <div>오류</div>;
  }

  return (
    <section className="flex gap-5 justify-between w-[1000px]">
      <ProductImages srcList={product.images} />
      <div>
        <ProductInfo id={product.id} info={product.info} />
      </div>
    </section>
  );
};

export default Product;
