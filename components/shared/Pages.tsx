import { ReactNode } from 'react';
import { BackGround } from './BackGround';
import { Header } from './Header';
type TProps = {
  children: ReactNode;
};
export const Pages = ({ children }: TProps) => {
  return (
    <div>
      <Header />
      {children}
      <BackGround />
    </div>
  );
};
