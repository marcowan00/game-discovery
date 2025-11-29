import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  description_raw: string;
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
}
