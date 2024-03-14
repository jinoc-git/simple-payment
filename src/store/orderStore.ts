import { create } from 'zustand';

import type { ProductType } from '@/lib/database.types';

interface OrderStore {
  orderList: ProductType[];
  countList: string[];
  coupon: string | null;
  deliveryAmount: number;
  orderPrice: number;
  afterCouponPrice: number;
  finalPrice: number;
  addDeliveryPrice: (price: number) => void;
  setOrderPrice: (price: number) => void;
  setAfterCouponPrice: (price: number) => void;
  setFinalPrice: (price: number) => void;
  setCoupon: (coupon: string) => void;
}

export const orderStore = create<OrderStore>((set, get) => {
  return {
    orderList: [],
    countList: [],
    coupon: null,
    deliveryAmount: 0,
    orderPrice: 0,
    afterCouponPrice: 0,
    finalPrice: 0,
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
    setFinalPrice: (price: number) => {
      set({ finalPrice: price });
    },
    setCoupon: (coupon: string) => {
      set({ coupon });
    },
  };
});
