import { create } from "zustand";
import type { ScreenSize } from "./Config";

interface DrumState {
  infoDialogOpen: boolean;
  setShowInfoDialog: (status: boolean) => void;
  groove: string;
  setGroove: (groove: string) => void;
  effects: boolean[];
  showEffect: (effect: number, status: boolean) => void;
  animateDrums: boolean;
  setAnimateDrums: (status: boolean) => void;
  hitState: string;
  setHitState: (drum: string) => void;
  freePlay: boolean;
  toggleFreePlay: () => void;
  screenSize: ScreenSize;
  setScreenSize: (size: ScreenSize) => void;
}

const useStore = create<DrumState>((set) => ({
  infoDialogOpen: false,
  groove: "1",
  effects: [false, false, false, false, false, false, false, false],
  setGroove: (newGroove) => set(() => ({ groove: newGroove })),
  setShowInfoDialog: (status) => set(() => ({ infoDialogOpen: status })),
  showEffect: (effect, status) =>
    set((state) => ({
      effects: state.effects.map((value, index) =>
        effect === index ? status : value
      ),
    })),
  animateDrums: false,
  setAnimateDrums: (status) => set(() => ({ animateDrums: status })),
  hitState: "",
  setHitState: (drum) => set(() => ({ hitState: drum })),
  freePlay: false,
  toggleFreePlay: () => set((state) => ({ freePlay: !state.freePlay })),
  screenSize: { width: window.innerWidth, height: window.innerHeight },
  setScreenSize: (size) =>
    set((state) => ({ screenSize: { ...state.screenSize, ...size } })),
}));

export default useStore;
