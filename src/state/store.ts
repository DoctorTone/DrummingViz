import { create } from "zustand";

interface DrumState {
  infoDialogOpen: boolean;
  setShowInfoDialog: (status: boolean) => void;
  groove: string;
  setGroove: (groove: string) => void;
  effects: boolean[];
  showEffect: (effect: number) => void;
}

const useStore = create<DrumState>((set) => ({
  infoDialogOpen: false,
  groove: "1",
  effects: [false, false, false, false, false, false, false, false],
  setGroove: (newGroove) => set(() => ({ groove: newGroove })),
  setShowInfoDialog: (status) => set(() => ({ infoDialogOpen: status })),
  showEffect: (effect) =>
    set((state) => ({
      effects: state.effects.map((value, index) =>
        effect === index ? true : value
      ),
    })),
}));

export default useStore;
