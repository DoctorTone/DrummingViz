import { create } from "zustand";

interface DrumState {
  infoDialogOpen: boolean;
  setShowInfoDialog: (status: boolean) => void;
}

const useStore = create<DrumState>((set) => ({
  infoDialogOpen: false,
  setShowInfoDialog: (status) => set(() => ({ infoDialogOpen: status })),
}));

export default useStore;
