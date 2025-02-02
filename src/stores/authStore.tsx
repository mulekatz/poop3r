import { create } from "zustand";

interface UserState {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

const useAuthStore = create<UserState>((set) => ({
  loggedIn: false,
  setLoggedIn: (loggedIn) => set({ loggedIn }),
}));

export default useAuthStore;
