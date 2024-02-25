import { create } from "zustand";

export type initialModalState = {
  isOpen: boolean;
};

export type initialModalAction = {
  showMenu(): void;
  hideMenu(): void;
  toggleMenu(): void;
};

export const useMenu = create<initialModalState & initialModalAction>()(
  (set) => ({
    isOpen: false,
    showMenu: () => set({ isOpen: true }),
    hideMenu: () => set({ isOpen: false }),
    toggleMenu: () => set((prev) => ({ isOpen: !prev.isOpen })),
  }),
);
