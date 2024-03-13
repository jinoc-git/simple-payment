import { cache } from 'react';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import type { Database } from './database.types';
import type { Session } from '@supabase/auth-helpers-nextjs';

export const supabaseServerClient = createServerComponentClient<Database>({
  cookies,
});

export const getAuthSession = async () => {
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  return session;
};

export const getUserFromServer = async (session: Session) => {
  const { data, error } = await supabaseServerClient
    .from('users')
    .select('*')
    .eq('id', session.user.id)
    .single();

  return data;
};

export const getProductList = cache(async () => {
  const { data, error } = await supabaseServerClient
    .from('products')
    .select('*');

  return data;
});

export const getProductById = cache(async (id: string) => {
  const { data, error } = await supabaseServerClient
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  return data;
});

export const getProductListByIds = cache(async (ids: string[]) => {
  const { data, error } = await supabaseServerClient
    .from('products')
    .select('*')
    .in('id', ids);

  return data;
});

export const getMyCoupons = async (userId: string) => {
  const { data, error } = await supabaseServerClient
    .from('coupons')
    .select('*')
    .eq('user_id', userId)
    .eq('is_used', false);

  if (error !== null) throw new Error(error.message);

  return data;
};
