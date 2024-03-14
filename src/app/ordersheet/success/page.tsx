import axios from 'axios';
import { redirect } from 'next/navigation';

import Celebrate from '@/components/success-page/celebrate/Celebrate';
import { getAuthSession, getUserFromServer } from '@/lib/serverActions';

import type { SearchParams } from '../page';

export interface Payment {
  orderName: string;
  approvedAt: string;
  receipt: {
    url: string;
  };
  totalAmount: number;
  method: '카드' | '가상계좌' | '계좌이체';
  paymentKey: string;
  orderId: string;
}

interface SuccessProps {
  searchParams: SearchParams;
}

export default async function Success({ searchParams }: SuccessProps) {
  const { paymentKey, orderId, amount } = searchParams;
  try {
    const { data: payment } = await axios.post<Payment>(
      'https://api.tosspayments.com/v1/payments/confirm',
      {
        paymentKey,
        orderId,
        amount,
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.NEXT_PUBLIC_TOSS_PAYMENTS_SECRET_KEY}:`,
          ).toString('base64')}`,
        },
      },
    );

    const session = await getAuthSession();
    if (!session) redirect('/signin');

    const user = await getUserFromServer(session);
    if (!user) redirect('/');

    return (
      <main className="min-h-[calc(100vh-48px)] bg-gray-100">
        <div className="flex-box w-full h-[60px]">
          <h2 className="text-2xl font-bold text-gray-700">결제 성공</h2>
        </div>
        <Celebrate userId={user.id} payment={payment} />
      </main>
    );
  } catch (err: any) {
    return redirect(`/ordersheet/fail`);
  }
}
