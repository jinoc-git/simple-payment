'use client';

import React from 'react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';

import Coupon from './coupon/Coupon';
import Point from './point/Point';

import type { CouponType, UserType } from '@/lib/database.types';

interface CouponAndPointProps {
  user: UserType;
  myCouponList: CouponType[];
}

const CouponAndPoint = ({ user, myCouponList }: CouponAndPointProps) => {
  return (
    <OrdersheetContent title="쿠폰 / 포인트">
      <Coupon myCouponList={myCouponList} />
      <Point point={user.point} />
    </OrdersheetContent>
  );
};

export default CouponAndPoint;
