import React from 'react';

import OrdersheetContent from '@/components/common/layouts/ordersheetContent/OrdersheetContent';
import { getMyCoupons } from '@/lib/serverActions';

import Coupon from './coupon/Coupon';
import Point from './point/Point';

import type { UserType } from '@/lib/database.types';

interface CouponAndPointProps {
  user: UserType;
}

const CouponAndPoint = async ({ user }: CouponAndPointProps) => {
  const myCouponList = await getMyCoupons(user.id);

  return (
    <OrdersheetContent title="쿠폰 / 포인트">
      <Coupon myCouponList={myCouponList} />
      <Point point={user.point} />
    </OrdersheetContent>
  );
};

export default CouponAndPoint;
