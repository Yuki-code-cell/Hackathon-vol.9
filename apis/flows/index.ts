import { supabase } from '../../libs/supabase';
type TProps = {
  userId: string;
};
// userIDからflow一覧をとってくる
export const getFlows = async ({ userId }: TProps) => {
  const { data } = await supabase
    .from('flows')
    .select('*')
    .eq('user_id', userId)
    .then((res) => {
      return res;
    });
  return data;
};
