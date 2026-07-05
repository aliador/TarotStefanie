import { tarotCards, TarotCardData } from './tarotCards';

export const getRandomCards = (count: number = 3): TarotCardData[] => {
  const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
