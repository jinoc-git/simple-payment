import { create } from 'zustand';

import type { ProductType, UserType } from '@/lib/database.types';

export interface DeliveryUser {
  name: string;
  phone: string;
  address: string | null;
  detailAddress: string | null;
}

interface OrderStore {
  orderUser: UserType | null;
  deliveryUser: DeliveryUser | null;
  orderList: ProductType[];
  countList: string[];
  coupon: { id: string | null; discount: number };
  usingPoint: number | 0;
  deliveryAmount: number;
  orderPrice: number;
  afterCouponPrice: number;
  finalPrice: number;
  setOrderUser: (user: UserType) => void;
  setDeliveryUser: (user: DeliveryUser) => void;
  setOrderList: (list: ProductType[]) => void;
  setCountList: (list: string[]) => void;
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
    deliveryUser: null,
    orderList: [],
    countList: [],
    coupon: { id: null, discount: 0 },
    usingPoint: 0,
    deliveryAmount: 0,
    orderPrice: 0,
    afterCouponPrice: 0,
    finalPrice: 0,
    setOrderUser: (user: UserType) => {
      set({ orderUser: user });
    },
    setDeliveryUser: (user: DeliveryUser) => {
      set({ deliveryUser: user });
    },
    setOrderList: (list: ProductType[]) => {
      set({ orderList: list });
    },
    setCountList: (list: string[]) => {
      set({ countList: list });
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
