'use client';

import React from 'react';
import type { Control } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export interface FormNormalInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

const FormNormalInput = (props: FormNormalInputProps) => {
  const { control, name, label, placeholder, type } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormNormalInput;
