'use clent';

import React from 'react';

import { uuid } from '@supabase/gotrue-js/dist/module/lib/helpers';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type { FormNormalInputProps } from '../formNormalInput/FormNormallnput';

interface FormSelectInputProps extends FormNormalInputProps {
  item: Record<string, string>;
}

const FormSelectInput = (props: FormSelectInputProps) => {
  const { control, name, label, placeholder, item } = props;
  const itemList = Object.entries(item);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {itemList.map(([value, name]) => (
                <SelectItem key={uuid()} value={value}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelectInput;
