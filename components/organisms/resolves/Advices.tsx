import { useMorphologicalStore } from '../../../libs/store';
import { Advice } from './Advice';

type TProps = {
  className?: string;
};
export const Advices = ({ className }: TProps) => {
  const { tokenizedTexts } = useMorphologicalStore();
  // 文を形態素解析した結果の配列を渡している
  return (
    <div className={`${className}`}>
      <Advice tokenizedText={tokenizedTexts} />
    </div>
  );
};
