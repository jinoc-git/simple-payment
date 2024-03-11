import React from 'react';

import { PRODUCT } from '@/constants/mockProduct';

import ProduecImages from './productImages/ProduecImages';
import ProductInfo from './productInfo.tsx/ProductInfo';

const Product = () => {
  return (
    <section className="flex flex-col">
      <ProduecImages srcList={PRODUCT.images} />
      <ProductInfo {...PRODUCT.info} />
    </section>
  );
};

export default Product;
