import { supabase } from '../../libs/supabase';
type TProps = {
  flowId: string;
};
// userIDからflow一覧をとってくる
export const getQuestions = async ({ flowId }: TProps) => {
  const { data } = await supabase
    .from('questions')
    .select('*')
    .eq('flow_id', flowId)
    .then((res) => {
      return res;
    });
  return data;
};
