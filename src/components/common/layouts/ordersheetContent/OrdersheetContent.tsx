import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface OrdersheetContentProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const OrdersheetContent = ({
  title,
  children,
  footer,
}: OrdersheetContentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg border-b-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">{children}</CardContent>
      {footer}
    </Card>
  );
};

export default OrdersheetContent;
