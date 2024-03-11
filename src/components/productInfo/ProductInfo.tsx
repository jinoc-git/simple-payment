import React from 'react';

import { PRODUCT } from '@/constants/mockProduct';

import ProduecImages from './productImages/ProduecImages';

const ProductInfo = () => {
  return (
    <section>
      <ProduecImages srcList={PRODUCT.images} />
    </section>
  );
};

export default ProductInfo;
