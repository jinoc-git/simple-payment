'use client';

import React, { useEffect } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getUserFromClient } from '@/lib/auth';
import { calcSavePoint } from '@/lib/calc';
import { savePoint } from '@/lib/point';

import type { Payment } from '@/app/ordersheet/success/page';

interface CelebrateProps {
  userId: string;
  payment: Payment;
}

const Celebrate = ({ userId, payment }: CelebrateProps) => {
  const queryClient = useQueryClient();
  const userMutation = useMutation({
    mutationFn: getUserFromClient,
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ['curUser'] }),
  });

  useEffect(() => {
    const afterPayment = async () => {
      const point = calcSavePoint(payment.totalAmount);
      await savePoint(userId, point);
      userMutation.mutate(userId);
    };

    afterPayment();
  }, []);

  return (
    <div className="flex-box flex-col mx-auto w-[1080px] space-y-2">
      <p>{payment.orderId}</p>
      <p>{payment.orderName}</p>
      <p>{payment.totalAmount}</p>
    </div>
  );
};

export default Celebrate;
