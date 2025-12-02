import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Game } from "../entities";

interface FavoritesStore {
  favorites: Game[];
  addFavorite: (game: Game) => void;
  removeFavorite: (gameId: number) => void;
  isFavorite: (gameId: number) => boolean;
}

const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (game) =>
        set((state) => ({ favorites: [...state.favorites, game] })),
      removeFavorite: (gameId) =>
        set((state) => ({
          favorites: state.favorites.filter((g) => g.id !== gameId),
        })),
      isFavorite: (gameId) => get().favorites.some((g) => g.id === gameId),
    }),
    {
      name: "game-discovery-favorites",
    }
  )
);

export default useFavoritesStore;
