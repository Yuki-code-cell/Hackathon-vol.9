import { supabase } from '../../libs/supabase';
type TProps = {
  userId: string;
};
export const getFlow = async ({ userId }: TProps) => {
  const { data } = await supabase
    .from('flows')
    .select('*')
    .eq('user_id', userId)
    .then((res) => {
      return res;
    });
  return data;
};
