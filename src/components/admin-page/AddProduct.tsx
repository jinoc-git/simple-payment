'use client';

import React from 'react';

import { addProduct } from '@/lib/admin';

const AddProduct = () => {
  const onClick = async () => {
    const mock = {
      images: [
        '/images/bed1.png',
        '/images/bed2.png',
        '/images/bed3.png',
        '/images/bed4.png',
        '/images/bed5.png',
      ],
      info: {
        name: '호텔식 침대 프레임',
        price: 199000,
        store: '편안한 가구',
        desc: '빛나는 공간에 따뜻한 침실을 선사합니다.',
        deliveryAmount: 8000,
      },
    };

    await addProduct(mock);
  };
  return (
    <div>
      <button onClick={onClick}>AddProduct</button>
    </div>
  );
};

export default AddProduct;
