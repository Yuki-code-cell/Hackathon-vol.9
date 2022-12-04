import { ReactNode } from 'react';
import { BackGround } from './BackGround';
type TProps = {
  children: ReactNode;
};
export const Pages = ({ children }: TProps) => {
  return (
    <div>
      {children}
      <BackGround />
    </div>
  );
};
