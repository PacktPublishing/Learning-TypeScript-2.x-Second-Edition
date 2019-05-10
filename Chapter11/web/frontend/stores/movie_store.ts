import { MovieInterface } from "../../universal/entities/movie";
import * as mobx from "mobx";
import { provide } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

const { observable, action, runInAction, configure } = mobx;
configure({ enforceActions: true });

@provide(TYPE.MovieStore)
export class MovieStore implements interfaces.MovieStore {

    // Contains the movies that have been already loaded from the server
    @observable public movies: MovieInterface[] = [];

    // Used to represent the status of the HTTP GET calls
    @observable public loadStatus: interfaces.Status = "pending";

    // Used to represent the status of the HTTP DELETE call
    @observable public deleteStatus: interfaces.Status = "idle";

    // Used to represent the status of the HTTP POST and HTTP PUT calls
    @observable public saveStatus: interfaces.Status = "idle";

    // Used to desplay the confirmation dialog before deleting a movie
    // null hides the modal and number displays the modal
    @observable public deleteMovieId: null | number = null;

    // Used to hold the values of the movie editor or null when nothing is being edited
    @observable public editorValue: null | Partial<MovieInterface> = null;

    @action
    public focusEditor() {
        runInAction(() => {
            this.editorValue = {};
        });
    }

    @action
    public focusOutEditor() {
        runInAction(() => {
            this.editorValue = null;
        });
    }

    @action
    public focusDeleteDialog(id: number) {
        runInAction(() => {
            this.deleteMovieId = id;
        });
    }

    @action
    public focusOutDeleteDialog() {
        runInAction(() => {
            this.deleteMovieId = null;
        });
    }

    @action
    public async getAll() {
        try {
            const response = await fetch("/api/v1/movies/", { method: "GET" });
            const movies: MovieInterface[] = await response.json();
            // We use setTimeout to simulate a slow request
            // this should allow us to see the loading component
            setTimeout(
                () => {
                    runInAction(() => {
                        this.loadStatus = "done";
                        this.movies = movies;
                    });
                },
                1500
            );
        } catch (error) {
            runInAction(() => {
                this.loadStatus = "error";
            });
        }
    }

    @action
    public edit<T extends MovieInterface, K extends keyof T>(key: K, val: T[K]) {
        runInAction(() => {
            const movie = {...(this.editorValue || {}), ...{[key]: val}};
            this.editorValue = movie;
        });
    }

    @action
    public async create(movie: Partial<MovieInterface>) {
        try {
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
            runInAction(() => {
                this.loadStatus = "done";
                this.movies.push(newMovie);
                this.editorValue = null;
            });
        } catch (error) {
            runInAction(() => {
                this.loadStatus = "error";
            });
        }
    }

    @action
    public async delete(id: number) {
        try {
            const response = await fetch(`/api/v1/movies/${id}`, { method: "DELETE" });
            await response.json();
            runInAction(() => {
                this.deleteStatus = "done";
                this.movies = this.movies.filter((m) => m.id !== id);
                this.deleteMovieId = null;
            });
        } catch (error) {
            runInAction(() => {
                this.deleteStatus = "error";
            });
        }
    }

}
