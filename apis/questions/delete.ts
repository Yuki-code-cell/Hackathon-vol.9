import { supabase } from '../../libs/supabase';
type TProps = {
  questionId: string;
};
export const deleteQuestions = async ({ questionId }: TProps) => {
  const { data, error } = await supabase
    .from('questions')
    .delete()
    .match({ id: questionId });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
