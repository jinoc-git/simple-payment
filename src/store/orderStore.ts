import { create } from 'zustand';

import type { ProductType } from '@/lib/database.types';

interface OrderStore {
  orderList: ProductType[];
  countList: string[];
  coupon: string | null;
  orderPrice: number;
  afterCouponPrice: number;
  finalPrice: number;
  setOrderPrice: (price: number) => void;
  setAfterCouponPrice: (price: number) => void;
  setFinalPrice: (price: number) => void;
  setCoupon: (coupon: string) => void;
}

export const orderStore = create<OrderStore>((set) => {
  return {
    orderList: [],
    countList: [],
    coupon: null,
    orderPrice: 0,
    afterCouponPrice: 0,
    finalPrice: 0,
    setOrderPrice: (price: number) => {
      set({ orderPrice: price });
    },
    setAfterCouponPrice: (price: number) => {
      set({ afterCouponPrice: price });
    },
    setFinalPrice: (price: number) => {
      set({ finalPrice: price });
    },
    setCoupon: (coupon: string) => {
      set({ coupon });
    },
  };
});
