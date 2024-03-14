import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database, InsertUserType } from './database.types';
import type { SigninFormRegisterInput } from '@/components/signinForm/SigninForm';
import type { SignupFormRegisterInput } from '@/components/signupForm/SignupForm';

const supabaseClientClient = createClientComponentClient<Database>();

export { supabaseClientClient };

export const signup = async (formData: SignupFormRegisterInput) => {
  const { username, email, phone, role, password } = formData;

  const { data, error } = await supabaseClientClient.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
      data: {
        username,
        phone,
        role,
      },
    },
  });

  if (error !== null) throw new Error(error.message);

  const user = {
    id: data.user?.id,
    username,
    email,
    phone,
    role,
  };

  await insertUser(user);

  return data.user;
};

const insertUser = async (user: InsertUserType) => {
  const { error } = await supabaseClientClient.from('users').insert(user);
  if (error !== null) throw new Error(error.message);
};

export const signin = async (formData: SigninFormRegisterInput) => {
  const { error } =
    await supabaseClientClient.auth.signInWithPassword(formData);
  if (error !== null) throw new Error(error.message);
};

export const signout = async () => {
  await supabaseClientClient.auth.signOut();
};

export const signinWithGoogle = async () => {
  const { data, error } = await supabaseClientClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${location.origin}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (error !== null) throw new Error(error.message);
};

export const getUserFromClient = async (userId: string) => {
  const { data, error } = await supabaseClientClient
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  return data;
};
