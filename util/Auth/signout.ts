import { supabase } from '../../libs/supabase';
export async function signout() {
  const { error } = await supabase.auth.signOut();
}
