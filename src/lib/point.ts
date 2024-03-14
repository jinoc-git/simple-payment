import { supabaseClientClient } from './auth';

export const savePoint = async (userId: string, point: number) => {
  const { data, error } = await supabaseClientClient
    .from('users')
    .update({ point })
    .eq('id', userId)
    .select();

  if (error !== null) throw new Error(error.message);
};
