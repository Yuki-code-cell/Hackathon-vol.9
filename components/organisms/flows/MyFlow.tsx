import { LinkTo } from '../../atoms/LinkTo';

type TProps = {
  id: string;
  title: string;
  description: string;
};
export const MyFlow = ({ id, title, description }: TProps) => {
  return (
    <div className=" relative rounded-md bg-white shadow-2xl gap-5 p-10 border">
      <h3 className="text-lg font-medium border-b-2 border-black pb-1">
        {title}
      </h3>
      <p className="py-5 text-gray-700">{description}</p>

      <div className="absolute bottom-3 right-20">
        <LinkTo href={`resolves/${id}`}>開始</LinkTo>
      </div>
      <div className="absolute bottom-3 right-3">
        <LinkTo href={`resolves/${id}/edit`}>編集</LinkTo>
      </div>
    </div>
  );
};
