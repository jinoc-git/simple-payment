'use client';

import React, { useEffect, useRef, useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { usePaymentWidget } from '@/hooks/usePaymentWidget';
import { orderStore } from '@/store/orderStore';

import PayButton from '../paymentsInfo/payButton/PayButton';

import type { PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk';

type PaymentMethodWidget = ReturnType<
  PaymentWidgetInstance['renderPaymentMethods']
> | null;

type AgreementWidget = ReturnType<
  PaymentWidgetInstance['renderAgreement']
> | null;

const TossPayment = () => {
  const { data: paymentWidget } = usePaymentWidget();

  const paymentMethodsWidgetRef = useRef<PaymentMethodWidget>(null);
  const agreementsWidgetRef = useRef<AgreementWidget>(null);

  const { deliveryAmount, finalPrice } = orderStore();
  const [price, setPrice] = useState(50000);

  useEffect(() => {
    setPrice(deliveryAmount + finalPrice);
  }, [deliveryAmount, finalPrice]);

  useEffect(() => {
    if (paymentWidget == null) return;

    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      '#payment-widget',
      { value: price },
      { variantKey: 'DEFAULT' },
    );

    paymentMethodsWidgetRef.current = paymentMethodsWidget;

    paymentWidget.renderAgreement('#agreement', {
      variantKey: 'AGREEMENT',
    });
  }, [paymentWidget]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) return;

    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  return (
    <Card className=" overflow-hidden">
      <CardContent className=" px-0 pb-0">
        <div id="payment-widget" style={{ width: '100%' }} />
        <div id="agreement" style={{ width: '100%' }} />
      </CardContent>
      <CardFooter>
        <PayButton />
      </CardFooter>
    </Card>
  );
};

export default TossPayment;
