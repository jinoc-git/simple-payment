'use client';

import React from 'react';

import Image from 'next/image';

import { TableCell, TableRow } from '@/components/ui/table';
import { addCommas } from '@/lib/changeNumberFormat';

import type { ProductType } from '@/lib/database.types';

interface ProductListItemProps {
  product: ProductType;
  onClick: (id: string) => void;
}

const ProductListItem = ({ product, onClick }: ProductListItemProps) => {
  const { id, images, info } = product;

  return (
    <TableRow className=" cursor-pointer" onClick={() => onClick(id)}>
      <TableCell>
        <Image src={images[0]} alt={`${info.name}`} width={200} height={200} />
      </TableCell>
      <TableCell className="text-center">{info.name}</TableCell>
      <TableCell className="text-center">{info.store}</TableCell>
      <TableCell className="text-right">{addCommas(info.price)}원</TableCell>
    </TableRow>
  );
};

export default ProductListItem;
