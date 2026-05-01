import { create } from 'zustand';
import type { Blueprint } from '../types/blueprint';

interface StoreState {
  idea: string;
  loading: boolean;
  error: string | null;
  blueprint: Blueprint | null;
  setIdea: (idea: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setBlueprint: (blueprint: Blueprint | null) => void;
  reset: () => void;
}

export const useStore = create<StoreState>((set) => ({
  idea: '',
  loading: false,
  error: null,
  blueprint: null,
  setIdea: (idea) => set({ idea }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setBlueprint: (blueprint) => set({ blueprint }),
  reset: () => set({ idea: '', loading: false, error: null, blueprint: null }),
}));
