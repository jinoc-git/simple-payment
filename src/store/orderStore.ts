import { create } from 'zustand';

import type { ProductType, UserType } from '@/lib/database.types';

interface OrderStore {
  orderUser: UserType | null;
  orderList: ProductType[];
  countList: string[];
  coupon: { id: string | null; discount: number };
  usingPoint: number | 0;
  deliveryAmount: number;
  orderPrice: number;
  afterCouponPrice: number;
  finalPrice: number;
  setOrderList: (list: ProductType[]) => void;
  setCountList: (list: string[]) => void;
  setOrderUser: (user: UserType) => void;
  setUsingPoint: (point: number) => void;
  setDeliveryAmount: (price: number) => void;
  setOrderPrice: (price: number) => void;
  setAfterCouponPrice: (price: number) => void;
  setFinalPrice: (price: number) => void;
  setCoupon: (id: string, discount: number) => void;
}

export const orderStore = create<OrderStore>((set, get) => {
  return {
    orderUser: null,
    orderList: [],
    countList: [],
    coupon: { id: null, discount: 0 },
    usingPoint: 0,
    deliveryAmount: 0,
    orderPrice: 0,
    afterCouponPrice: 0,
    finalPrice: 0,
    setOrderList: (list: ProductType[]) => {
      set({ orderList: list });
    },
    setCountList: (list: string[]) => {
      set({ countList: list });
    },
    setOrderUser: (user: UserType) => {
      set({ orderUser: user });
    },
    setUsingPoint: (point: number) => {
      set({ usingPoint: point });
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
