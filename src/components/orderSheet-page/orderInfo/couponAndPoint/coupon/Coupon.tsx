'use client';

import React, { useEffect, useState } from 'react';

import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { calcCouponDiscountAmount } from '@/lib/calc';
import { checkCondition } from '@/lib/coupon';
import { formatYYYYMMDDWithSlash } from '@/lib/dateFormat';
import { orderStore } from '@/store/orderStore';

import type { CouponType } from '@/lib/database.types';

interface CouponProps {
  myCouponList: CouponType[];
}

const Coupon = ({ myCouponList }: CouponProps) => {
  const { afterCouponPrice, orderPrice, setCoupon, setAfterCouponPrice } =
    orderStore();
  const [discount, setDiscount] = useState(0);

  const onChangeCoupon = (val: string) => {
    if (val === 'none') {
      setCoupon(null, 0);
      setAfterCouponPrice(afterCouponPrice + discount);
      return;
    }
    const usingCoupon = myCouponList.find((coupon) => coupon.id === val);
    if (usingCoupon) {
      const dicountAmount = calcCouponDiscountAmount(orderPrice, usingCoupon);

      setDiscount(dicountAmount);
      setCoupon(val, dicountAmount);
      setAfterCouponPrice(orderPrice - dicountAmount);
    }
  };

  useEffect(() => {
    setAfterCouponPrice(orderPrice);
  }, [orderPrice]);

  return (
    <div>
      <Select onValueChange={onChangeCoupon}>
        <SelectTrigger>
          <SelectValue placeholder="쿠폰을 선택해 주세요." />
        </SelectTrigger>
        <SelectContent>
          {myCouponList.map((coupon) => {
            const disabled = !checkCondition(coupon, orderPrice);

            return (
              <SelectItem key={uuid()} value={coupon.id} disabled={disabled}>
                <p>{coupon.name}</p>
                <p>~{formatYYYYMMDDWithSlash(coupon.expiry_date)}</p>
              </SelectItem>
            );
          })}
          <SelectItem value="none">
            <p>쿠폰 사용 안 함</p>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Coupon;
