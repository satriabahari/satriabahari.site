import { create } from "zustand";

export interface InitialModalState {
  isOpen: boolean;
  text: string;
}

export interface InitialModalAction {
  showNotif(): void;
  hideNotif(): void;
  setNotifText(text: string): void;
}

export const useNotifStore = create<InitialModalState & InitialModalAction>()(
  (set) => ({
    isOpen: false,
    text: "",
    showNotif: () => set({ isOpen: true }),
    hideNotif: () => set({ isOpen: false }),
    setNotifText: (text: string) => set({ text }),
  }),
);
