import { ActorInterface } from "../universal/entities/actor";
import { MovieInterface } from "../universal/entities/movie";

export type Status = "idle" | "pending" | "error" | "done";

export interface ActorStore {
    actors: ActorInterface[];
    loadStatus: Status;
    saveStatus: Status;
    deleteStatus: Status;
    deleteActorId: null | number;
    editorValue: null | Partial<ActorInterface>;
    getAll(): Promise<void>;
    create(actor: ActorInterface): Promise<void>;
    edit<T extends ActorInterface, K extends keyof T>(k: K, val: T[K]): void;
    delete(id: number): Promise<void>;
    focusEditor(): void;
    focusDeleteDialog(id: number): void;
    focusOutDeleteDialog(): void;
    focusOutEditor(): void;
}

export interface MovieStore {
    movies: MovieInterface[];
    loadStatus: Status;
    saveStatus: Status;
    deleteStatus: Status;
    deleteMovieId: null | number;
    editorValue: null | Partial<MovieInterface>;
    getAll(): Promise<void>;
    create(movie: MovieInterface): Promise<void>;
    edit<T extends MovieInterface, K extends keyof T>(k: K, val: T[K]): void;
    delete(id: number): Promise<void>;
    focusEditor(): void;
    focusDeleteDialog(id: number): void;
    focusOutDeleteDialog(): void;
    focusOutEditor(): void;
}
