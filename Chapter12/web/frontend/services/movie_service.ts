import { Injectable } from "@angular/core";
import { MovieInterface } from "../../universal/entities/movie";
import * as interfaces from "../interfaces";

@Injectable()
export class MovieService implements interfaces.MovieService {

    public async getAll() {
        return new Promise<MovieInterface[]>(async (res, rej) => {
            try {
                const response = await fetch("/api/v1/movies/", { method: "GET" });
                const movs: MovieInterface[] = await response.json();
                // We use setTimeout to simulate a slow request
                // this should allow us to see the loading component
                setTimeout(
                    () => {
                        res(movs);
                    },
                    1500
                );
            } catch (error) {
                rej(error);
            }
        });
    }

    public async create(movie: Partial<MovieInterface>) {
        const response = await fetch(
            "/api/v1/movies/",
            {
                body: JSON.stringify(movie),
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                method: "POST"
            }
        );
        const newMovie: MovieInterface = await response.json();
        return newMovie;
    }

    public async delete(id: number) {
        const response = await fetch(`/api/v1/movies/${id}`, { method: "DELETE" });
        await response.json();
    }

}
