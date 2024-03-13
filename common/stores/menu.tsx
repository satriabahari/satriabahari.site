import { create } from "zustand";

export type InitialModalState = {
  isOpen: boolean;
};

export type InitialModalAction = {
  showMenu(): void;
  hideMenu(): void;
  toggleMenu(): void;
};

export const useMenu = create<InitialModalState & InitialModalAction>()(
  (set) => ({
    isOpen: false,
    showMenu: () => set({ isOpen: true }),
    hideMenu: () => set({ isOpen: false }),
    toggleMenu: () => set((prev) => ({ isOpen: !prev.isOpen })),
  }),
);
