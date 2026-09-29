import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  favoriteCommands: string[];
  addFavorite: (command: string) => void;
  removeFavorite: (command: string) => void;
  toggleFavorite: (command: string) => void;
  isFavorite: (command: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteCommands: [],
      
      addFavorite: (command) => {
        const state = get();
        if (!state.favoriteCommands.includes(command)) {
          set({ favoriteCommands: [...state.favoriteCommands, command] });
        }
      },
      
      removeFavorite: (command) => {
        set((state) => ({
          favoriteCommands: state.favoriteCommands.filter((c) => c !== command),
        }));
      },
      
      toggleFavorite: (command) => {
        const state = get();
        if (state.favoriteCommands.includes(command)) {
          state.removeFavorite(command);
        } else {
          state.addFavorite(command);
        }
      },
      
      isFavorite: (command) => {
        return get().favoriteCommands.includes(command);
      },
    }),
    {
      name: "pinguinono-favorites",
    }
  )
);
