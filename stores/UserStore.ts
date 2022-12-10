import create from 'zustand';

type UserStore = {
  userId: string;
  setUserId: (id: string) => void;
};
export const UserStore = create<UserStore>((set) => ({
  userId: '',
  setUserId: (id: string) => {
    return {
      userId: id,
    };
  },
}));
