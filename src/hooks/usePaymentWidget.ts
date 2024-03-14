import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';
import { useQuery } from '@tanstack/react-query';
import { loadPaymentWidget } from '@tosspayments/payment-widget-sdk';

const clientKey = process.env.NEXT_PUBLIC_TOSS_PAYMENTS_ClIENT_KEY as string;
const customerKey = uuid(); // 비회원 결제 시 ANONYMOUS

export const usePaymentWidget = () => {
  return useQuery({
    queryKey: ['payment-widget', clientKey, customerKey],
    queryFn: () => {
      return loadPaymentWidget(clientKey, customerKey);
    },
  });
};
