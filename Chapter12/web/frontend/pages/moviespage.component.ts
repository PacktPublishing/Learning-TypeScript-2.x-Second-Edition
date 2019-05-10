import { Component, OnInit, Inject } from "@angular/core";
import { MovieInterface } from "../../universal/entities/movie";
import * as interfaces from "../interfaces";
import { MOVIE_SERVICE } from "../config/types";

function isValidNewMovie(o: any) {
    if (
        o === null ||
        o === undefined ||
        // new movies don't have ID
        o.id !== undefined ||
        typeof o.title !== "string" ||
        isNaN(o.year)
    ) {
        return false;
    }
    return true;
}

@Component({
    selector: "movies-page",
    template: `
        <app-container>
            <app-row>
                <app-column width="12">
                    <div style="text-align: right; margin-bottom: 10px">
                        <app-button (clicked)="focusEditor()">
                            Add Movie
                        </app-button>
                    </div>
                </app-column>
            </app-row>
            <app-row>
                <app-column width="12">
                    <app-list-group [isLoaded]="isLoaded" [errorMsg]="fetchErrorMsg">
                        <app-list-group-item *ngFor="let movie of movies">
                            <app-row>
                                <app-column width="8">
                                    <h5>{{movie.title}}</h5>
                                    <p>{{movie.year}}</p>
                                </app-column>
                                <app-column width="4" style="text-align: right">
                                    <app-button kind="danger" (clicked)="focusDeleteDialog(movie.id)">
                                        Delete
                                    </app-button>
                                </app-column>
                            </app-row>
                        </app-list-group-item>
                    </app-list-group>
                </app-column>
            </app-row>
            <div *ngIf="editorValue">
                <app-modal
                    [title]="'Movie Editor'"
                    [acceptLabel]="'Save'"
                    [cancelLabel]="'Cancel'"
                    [error]="saveStatus"
                    (onCancel)="focusOutEditor()"
                    (onAccept)="saveMovie()"
                >
                    <form>
                        <app-text-field
                            [id]="'title'"
                            [title]="'Title'"
                            [placeholder]="'Title'"
                            [errorMsg]="isValidTitle"
                            (onChange)="edit($event)"
                        ></app-text-field>
                        <app-text-field
                            [id]="'year'"
                            [title]="'Year'"
                            [placeholder]="'Year'"
                            [errorMsg]="isValidYear"
                            (onChange)="edit($event)"
                        ></app-text-field>
                    </form>
                </app-modal>
            </div>
            <div *ngIf="deleteMovieId !== null">
                <app-modal
                    [title]="'Delete?'"
                    [acceptLabel]="'Delete'"
                    [cancelLabel]="'Cancel'"
                    [error]="deleteStatus"
                    (onCancel)="focusOutDeleteDialog()"
                    (onAccept)="deleteMovie()"
                >
                    Are you sure?
                </app-modal>
            </div>
        </app-container>
    `
})
export class MoviesPageComponent implements OnInit {

    // Contains the movies that have been already loaded from the server
    public movies: MovieInterface[];

    // Used to represent the status of the HTTP GET calls
    public isLoaded!: boolean;

    // Display error if loading fails
    public fetchErrorMsg: null | string;

    // Used to represent the status of the HTTP DELETE call
    public deleteStatus: null | string;

    // Used to represent the status of the HTTP POST and HTTP PUT calls
    public saveStatus: null | string;

    // Used to desplay the confirmation dialog before deleting a movie
    // null hides the modal and number displays the modal
    public deleteMovieId: null | number;

    // Used to hold the values of the movie editor or null when nothing is being edited
    public editorValue: null | Partial<MovieInterface>;
    public isValidTitle!: null | string;
    public isValidYear!: null | string;

    public movieService!: interfaces.MovieService;

    public constructor(
        @Inject(MOVIE_SERVICE) movieService: interfaces.MovieService
    ) {
        this.movieService = movieService;
        this.movies = [];
        this.fetchErrorMsg = null;
        this.isLoaded = false;
        this.deleteStatus = null;
        this.saveStatus = null;
        this.deleteMovieId = null;
        this.editorValue = null;
        this.isValidTitle = null;
        this.isValidYear = null;
    }

    public async ngOnInit() {
        this.isLoaded = false;
        try {
            this.movies = await this.movieService.getAll();
            this.isLoaded = true;
            this.fetchErrorMsg = null;
        } catch (err) {
            this.isLoaded = true;
            this.fetchErrorMsg = "Loading failed!";
        }
    }

    public focusEditor() {
        this.editorValue = {};
    }

    public focusOutEditor() {
        this.editorValue = null;
    }

    public focusDeleteDialog(id: number) {
        this.deleteMovieId = id;
    }

    public focusOutDeleteDialog() {
        this.deleteMovieId = null;
    }

    public async saveMovie() {
        if (isValidNewMovie(this.editorValue)) {
            const newMovie = await this.movieService.create(this.editorValue as any);
            this.movies.push(newMovie);
            this.saveStatus = null;
            this.editorValue = null;
        } else {
            this.saveStatus = "Invalid movie!";
        }
    }

    public async deleteMovie() {
        try {
            if (this.deleteMovieId) {
                await this.movieService.delete(this.deleteMovieId);
                this.movies = this.movies.filter((m) => m.id !== this.deleteMovieId);
                this.deleteStatus = null;
                this.deleteMovieId = null;
            }
        } catch (err) {
            this.deleteStatus = "Cannot delete movie!";
        }
    }

    public edit(keyVal: any) {
        const movie = {...(this.editorValue || {}), ...{[keyVal.k]: keyVal.v}};
        if (movie.title) {
            this.isValidTitle = (movie.title && movie.title.length) > 0 ? null : "Title cannot be empty!";
        }
        if (movie.year) {
            this.isValidYear = isNaN(movie.year) === false ? null : "Year must be a number!";
        }
        this.editorValue = movie;
    }

}
