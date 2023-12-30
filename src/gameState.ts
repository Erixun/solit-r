import { JSX } from 'preact/jsx-runtime';
import { create } from 'zustand';
import { Position } from './positions';
import { getDefaultBoardState } from './boardState';

export const useGameStore = create<gameStore>((set) => ({
  boardState: getDefaultBoardState(),
  selectedPearlPosition: undefined,
  targetPit: undefined,
  pearlsRemoved: [],
  appendRemoved: (pearl) =>
    set((state) => ({ pearlsRemoved: [...state.pearlsRemoved, pearl] })),
  setSelectedPearl: (selectedPearl) =>
    set({ selectedPearlPosition: selectedPearl }),
  setTargetPit: (targetPit) => set({ targetPit }),
  setBoardState: (boardState) => set({ boardState }),
  resetBoardState: () => set({ boardState: getDefaultBoardState(), pearlsRemoved: [] }),
}));

export type gameStore = {
  boardState: Map<string, JSX.Element>;
  selectedPearlPosition: Position | undefined;
  targetPit: Position | undefined;
  pearlsRemoved: JSX.Element[];
  appendRemoved: (pearl: JSX.Element) => void;
  setSelectedPearl: (selectedPearl: Position) => void;
  setTargetPit: (targetPit: Position) => void;
  setBoardState: (boardState: Map<string, JSX.Element>) => void;
  resetBoardState: () => void;
};
