import { create } from 'zustand';

import type { ProductType } from '@/lib/database.types';

interface OrderStore {
  orderList: ProductType[];
  countList: string[];
  coupon: string | null;
  usingPoint: number | 0;
  deliveryAmount: number;
  orderPrice: number;
  afterCouponPrice: number;
  finalPrice: number;
  setUsingPoint: (point: number) => void;
  addDeliveryPrice: (price: number) => void;
  setOrderPrice: (price: number) => void;
  setAfterCouponPrice: (price: number) => void;
  setCoupon: (coupon: string) => void;
}

export const orderStore = create<OrderStore>((set, get) => {
  return {
    orderList: [],
    countList: [],
    coupon: null,
    usingPoint: 0,
    deliveryAmount: 0,
    orderPrice: 0,
    afterCouponPrice: 0,
    finalPrice: 0,
    setUsingPoint: (point: number) => {
      const finalPrice = get().afterCouponPrice - point;
      set({ usingPoint: point, finalPrice });
    },
    addDeliveryPrice: (price: number) => {
      const deliveryAmount = get().deliveryAmount + price;
      set({ deliveryAmount });
    },
    setOrderPrice: (price: number) => {
      set({ orderPrice: price });
    },
    setAfterCouponPrice: (price: number) => {
      set({ afterCouponPrice: price });
    },
    setCoupon: (coupon: string) => {
      set({ coupon });
    },
  };
});
