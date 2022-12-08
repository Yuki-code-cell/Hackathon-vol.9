type TProps = {
  className: string;
};
export const Helper = ({ className }: TProps) => {
  return <div className={`${className}`}>Helper</div>;
};
