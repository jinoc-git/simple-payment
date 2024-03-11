'use client';

import React from 'react';

import { CardDescription } from '@/components/ui/card';

interface DescProps {
  name: string;
  content: string;
}

const Desc = ({ name, content }: DescProps) => {
  return (
    <div className="flex justify-between">
      <CardDescription>{name}</CardDescription>
      <p>{content}</p>
    </div>
  );
};

export default Desc;
