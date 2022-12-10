import { supabase } from '../../libs/supabase';
type TProps = {
  flowId: string;
};
// flowIdからquestion一覧をとってくる
export const getQuestions = async ({ flowId }: TProps) => {
  const { data } = await supabase
    .from('questions')
    .select('*')
    .eq('flow_id', flowId)
    .order('order', { ascending: true })
    .then((res) => {
      return res;
    });
  return data;
};
