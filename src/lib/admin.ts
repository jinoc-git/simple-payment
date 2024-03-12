import { supabaseClientClient } from './auth';

import type { InsertProductType } from '@/constants/mockProduct';

export const addProduct = async (product: InsertProductType) => {
  const { data, error } = await supabaseClientClient.from('products').insert({
    images: product.images,
    info: product.info,
  });

  console.log(data);
};
