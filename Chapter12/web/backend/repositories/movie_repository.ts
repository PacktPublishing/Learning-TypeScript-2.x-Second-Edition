import { getConnection } from "typeorm";
import { Movie } from "../entities/movie";

export function getMovieRepository() {
    const conn = getConnection();
    const movieRepository = conn.getRepository(Movie);
    return movieRepository;
}
