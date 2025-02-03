import { GAME_REGISTRY, Game, GameCategory } from '@/config/GameRegistry';
import { ComingSoon } from '@/components/ui/ComingSoon';


export const getAllGames = (): Game[] =>
  Object.values(GAME_REGISTRY).map(({ id, title, image, description, category }) => ({
    id,
    title,
    image,
    description,
    category
  }));

export const getGamesByCategory = (category: GameCategory): Game[] =>
  getAllGames().filter(game => game.category === category);

export const getAvailableGames = (): Game[] =>
  getAllGames().filter(game => GAME_REGISTRY[game.id].component !== ComingSoon);

// export const getFeaturedGames = (): Game[] =>
//   getAllGames().filter(game => GAME_REGISTRY[game.id].hasHighscores);

export const isGamePlayable = (id: number): boolean =>
  GAME_REGISTRY[id]?.component !== ComingSoon;

export const getGame = (id: number) => GAME_REGISTRY[id];

export const getGameComponent = (id: number) => GAME_REGISTRY[id]?.component;