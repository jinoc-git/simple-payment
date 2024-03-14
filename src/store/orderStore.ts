import { create } from 'zustand';

import type { ProductType } from '@/lib/database.types';

interface OrderStore {
  orderList: ProductType[];
  countList: string[];
  coupon: { id: string | null; discount: number };
  usingPoint: number | 0;
  deliveryAmount: number;
  orderPrice: number;
  afterCouponPrice: number;
  finalPrice: number;
  setUsingPoint: (point: number) => void;
  setDeliveryAmount: (price: number) => void;
  setOrderPrice: (price: number) => void;
  setAfterCouponPrice: (price: number) => void;
  setFinalPrice: (price: number) => void;
  setCoupon: (id: string, discount: number) => void;
}

export const orderStore = create<OrderStore>((set, get) => {
  return {
    orderList: [],
    countList: [],
    coupon: { id: null, discount: 0 },
    usingPoint: 0,
    deliveryAmount: 0,
    orderPrice: 0,
    afterCouponPrice: 0,
    finalPrice: 0,
    setUsingPoint: (point: number) => {
      const finalPrice = get().afterCouponPrice - point;
      set({ usingPoint: point, finalPrice });
    },
    setDeliveryAmount: (price: number) => {
      set({ deliveryAmount: price });
    },
    setOrderPrice: (price: number) => {
      set({ orderPrice: price });
    },
    setAfterCouponPrice: (price: number) => {
      set({ afterCouponPrice: price });
    },
    setFinalPrice: (price: number) => {
      set({ finalPrice: price });
    },
    setCoupon: (id: string, discount: number) => {
      set({ coupon: { id, discount } });
    },
  };
});
