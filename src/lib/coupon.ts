import { supabaseClientClient } from './auth';

import type { CouponType, InsertCouponType } from './database.types';

export const addMembershipCoupons = async (userId: string | undefined) => {
  if (!userId) return;

  const rateCoupon: InsertCouponType = {
    user_id: userId,
    name: '20% 할인 쿠폰',
    description:
      '가입 기념 20% 할인 쿠폰 (최소 결제 금액 1만원 이상, 최대 1만원 할인)',
    discount_type: 'rate',
    discount: 20,
    usage_amount: 10000,
    max_discount: 10000,
  };
  const amountCoupon: InsertCouponType = {
    user_id: userId,
    name: '5천원 할인 쿠폰',
    description: '가입 기념 5천원 할인 쿠폰 (최소 결제 금액 2만원 이상)',
    discount_type: 'amount',
    discount: 5000,
    usage_amount: 20000,
    max_discount: 5000,
  };

  const { error } = await supabaseClientClient
    .from('coupons')
    .insert([rateCoupon, amountCoupon]);

  if (error !== null) throw new Error(error.message);
};

export const checkCondition = (coupon: CouponType, totalPrice: number) => {
  const { expiry_date, usage_amount } = coupon;
  const today = new Date();
  const isExpire = today > new Date(expiry_date);
  if (isExpire) return false;

  const isNotUsage = totalPrice < usage_amount;
  if (isNotUsage) return false;

  return true;
};

export const setCouponisUsed = async (couponId: string | null) => {
  if (!couponId) return;

  const { data, error } = await supabaseClientClient
    .from('coupons')
    .update({ is_used: true })
    .eq('id', couponId)
    .select();

  if (error !== null) throw new Error(error.message);
};
