'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import ProductListItem from './productListItem/ProductListItem';

import type { ProductType } from '@/lib/database.types';

interface ProductListProps {
  productList: ProductType[] | null;
}

const ProductList = ({ productList }: ProductListProps) => {
  const router = useRouter();
  const onClickItem = (id: string) => {
    router.push(`productDetail/${id}`);
  };

  return (
    <Table className="w-[1080px] mx-auto">
      <TableCaption>product list</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[220px] text-center">상품</TableHead>
          <TableHead className="text-center">상품 명</TableHead>
          <TableHead className="text-center">판매처</TableHead>
          <TableHead className="w-[160px] text-right">상품 가격</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productList?.map((item) => (
          <ProductListItem key={item.id} product={item} onClick={onClickItem} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductList;
