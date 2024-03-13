import { create } from 'zustand';

import type { CouponType, ProductType } from '@/lib/database.types';

interface OrderStore {
  orderList: ProductType[];
  countList: string[];
  coupon: CouponType | null;
  totalPrice: number;
  finalPrice: number;
  setTotalPrice: (price: number) => void;
  setFinalPrice: () => void;
}

export const orderStore = create<OrderStore>((set) => {
  return {
    orderList: [],
    countList: [],
    coupon: null,
    totalPrice: 0,
    finalPrice: 0,
    setTotalPrice: (price: number) => {
      set({ totalPrice: price });
    },
    setFinalPrice: () => {},
  };
});
