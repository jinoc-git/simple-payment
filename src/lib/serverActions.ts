import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import type { Database } from './database.types';

const supabaseServerClient = createServerComponentClient<Database>({ cookies });

export const getAuthSession = async () => {
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  return session;
};
