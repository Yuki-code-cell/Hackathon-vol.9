import { supabase } from '../../libs/supabase';
type TProps = {
  flowId: string;
  question: string;
  order: number;
};
export const createQuestion = async (questions: TProps[]) => {
  const qRes = questions.map(async (q) => {
    const { data, error } = await supabase.from('questions').insert({
      flow_id: q.flowId,
      question: q.question,
      order: q.order,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  });

  return qRes;
};
