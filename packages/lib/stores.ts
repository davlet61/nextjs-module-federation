import create from 'zustand';

export interface Movie {
  title: string;
  image: string;
}

export interface StoreProps {
  movies: Array<Movie>;
  addMovie: (movie: Movie) => void;
}

export const useMovieStore = create<StoreProps>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));

export interface VisibilityStoreProps {
  visibility: boolean;
  toggleVisibility: () => void;
}

export const useVisibility = create<VisibilityStoreProps>((set) => ({
  visibility: false,
  toggleVisibility: () => set((state) => ({ visibility: !state.visibility })),
}));

interface Option {
  value: string;
}

export interface SelectedStore {
  selectedOpt: Option;
  setSelected: (option: Option) => void;
}

export const useSelected = create<SelectedStore>((set) => ({
  selectedOpt: { value: 'Select ...' },
  setSelected: (opt) => set(() => ({ selectedOpt: opt })),
}));

export interface CountStore {
  count: number;
  increment: () => void;
  clear: () => void;
}

export const useCount = create<CountStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
}));
