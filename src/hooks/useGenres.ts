import genres from "../data/genres.ts";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// We want to deliver static data
// The consumers expect this form, so we pass these values to minimize impact on consumers
const useGenres = () => ({ data: genres, isLoading: false, error: [] });

export default useGenres;
