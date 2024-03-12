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

export const getProduct = cache(async (id: string) => {
  // const {data, error} = await supabaseServerClient.from()
});
