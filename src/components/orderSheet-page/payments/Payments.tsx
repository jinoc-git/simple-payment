import React from 'react';

import PaymentsInfo from './paymentsInfo/PaymentsInfo';

import type { UserType } from '@/lib/database.types';

interface PaymentsProps {
  user?: UserType | null;
}

const Payments = ({ user }: PaymentsProps) => {
  return (
    <section className="flex flex-col gap-4 w-[420px]">
      <PaymentsInfo />
    </section>
  );
};

export default Payments;
