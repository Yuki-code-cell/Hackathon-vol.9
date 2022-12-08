import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};
export const Button = ({ children, className, onClick }: TProps) => {
  return (
    <button
      className={`${className} border-2 rounded-md py-1 px-2 border-black hover:bg-slate-400`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
