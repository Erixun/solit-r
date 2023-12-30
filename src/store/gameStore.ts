import { JSX } from 'preact/jsx-runtime';
import { create } from 'zustand';
import { Position } from '../positions';
import { initialBoardState, getInitialBoardState } from './boardState';

export const useGameStore = create<GameStore>((set, get) => ({
  previousState: null,
  nextState: null,
  boardState: initialBoardState,
  selectedPearlPosition: undefined,
  pearlsRemoved: [],
  setPreviousState: (previousState) => set({ previousState }),
  setToPreviousState: () => {
    const {
      previousState,
      nextState,
      boardState,
      selectedPearlPosition,
      pearlsRemoved,
    } = get();
    if (previousState) {
      set({
        boardState: previousState.boardState,
        selectedPearlPosition: previousState.selectedPearlPosition,
        pearlsRemoved: previousState.pearlsRemoved,
        previousState: previousState.previousState,
        nextState: {
          boardState,
          selectedPearlPosition,
          pearlsRemoved,
          previousState: previousState.previousState,
          nextState,
        },
      });
    }
  },
  setToNextState: () => {
    const { nextState } = get();
    if (nextState) {
      set({
        boardState: nextState.boardState,
        selectedPearlPosition: nextState.selectedPearlPosition,
        pearlsRemoved: nextState.pearlsRemoved,
        previousState: nextState,
        nextState: nextState.nextState,
      });
    }
  },
  appendRemoved: (pearl) =>
    set((state) => ({ pearlsRemoved: [...state.pearlsRemoved, pearl] })),
  setSelectedPearl: (selectedPearl) =>
    set({ selectedPearlPosition: selectedPearl }),
  setBoardState: (boardState) => set({ boardState }),
  reset: () =>
    set({
      boardState: getInitialBoardState(),
      pearlsRemoved: [],
      selectedPearlPosition: undefined,
      previousState: null,
      nextState: null,
    }),
}));

export type GameStoreState = {
  previousState: GameStoreState | null;
  nextState: GameStoreState | null;
  boardState: Map<string, JSX.Element>;
  selectedPearlPosition: Position | undefined;
  pearlsRemoved: JSX.Element[];
};
export type GameStoreActions = {
  setPreviousState: (previousState: GameStoreState) => void;
  setToPreviousState: () => void;
  setToNextState: () => void;
  appendRemoved: (pearl: JSX.Element) => void;
  setSelectedPearl: (selectedPearl: Position) => void;
  setBoardState: (boardState: Map<string, JSX.Element>) => void;
  reset: () => void;
};

export type GameStore = GameStoreState & GameStoreActions;
