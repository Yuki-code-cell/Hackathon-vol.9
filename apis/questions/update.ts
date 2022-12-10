import { supabase } from '../../libs/supabase';

type TProps = {
  questionId: string;
  question: string;
  order: number;
};

export const updateQuestions = async ({
  questionId,
  question,
  order,
}: TProps) => {
  const { data, error } = await supabase
    .from('questions')
    .update({ question, order })
    .match({ id: questionId });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
