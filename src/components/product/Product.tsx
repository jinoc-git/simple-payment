import React from 'react';

import { PRODUCT } from '@/constants/mockProduct';

import ProduecImages from './productImages/ProduecImages';
import ProductInfo from './productInfo.tsx/ProductInfo';

const Product = async () => {
  return (
    <section className="flex flex-col w-[500px]">
      <ProduecImages srcList={PRODUCT[0].images} />
      <ProductInfo {...PRODUCT[0].info} />
    </section>
  );
};

export default Product;
