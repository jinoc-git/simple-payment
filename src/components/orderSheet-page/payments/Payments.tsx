import React from 'react';

import PaymentsInfo from './paymentsInfo/PaymentsInfo';

import type { UserType } from '@/lib/database.types';

interface PaymentsProps {
  user?: UserType | null;
}

const Payments = ({ user }: PaymentsProps) => {
  return (
    <section className="w-[450px]">
      <PaymentsInfo />
    </section>
  );
};

export default Payments;
