import { create } from "zustand";

interface DrumState {
  infoDialogOpen: boolean;
  setShowInfoDialog: (status: boolean) => void;
  groove: string;
  setGroove: (groove: string) => void;
}

const useStore = create<DrumState>((set) => ({
  infoDialogOpen: false,
  groove: "1",
  setGroove: (newGroove) => set(() => ({ groove: newGroove })),
  setShowInfoDialog: (status) => set(() => ({ infoDialogOpen: status })),
}));

export default useStore;
