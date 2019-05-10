import { Component, OnInit, Inject } from "@angular/core";
import { ActorInterface } from "../../universal/entities/actor";
import * as interfaces from "../interfaces";
import { ACTOR_SERVICE } from "../config/types";

function isValidNewActor(o: any) {
    if (
        o === null ||
        o === undefined ||
        // new actors don't have ID
        o.id !== undefined ||
        typeof o.name !== "string" ||
        isNaN(o.yearBorn)
    ) {
        return false;
    }
    return true;
}

@Component({
    selector: "actors-page",
    template: `
        <app-container>
            <app-row>
                <app-column width="12">
                    <div style="text-align: right; margin-bottom: 10px">
                        <app-button (clicked)="focusEditor()">
                            Add Actor
                        </app-button>
                    </div>
                </app-column>
            </app-row>
            <app-row>
                <app-column width="12">
                    <app-list-group [isLoaded]="isLoaded" [errorMsg]="fetchErrorMsg">
                        <app-list-group-item *ngFor="let actor of actors">
                            <app-row>
                                <app-column width="8">
                                    <h5>{{actor.name}}</h5>
                                    <p>{{actor.yearBorn}}</p>
                                </app-column>
                                <app-column width="4" style="text-align: right">
                                    <app-button kind="danger" (clicked)="focusDeleteDialog(actor.id)">
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
                    [title]="'Actor Editor'"
                    [acceptLabel]="'Save'"
                    [cancelLabel]="'Cancel'"
                    [error]="saveStatus"
                    (onCancel)="focusOutEditor()"
                    (onAccept)="saveActor()"
                >
                    <form>
                        <app-text-field
                            [id]="'name'"
                            [title]="'Name'"
                            [placeholder]="'Name'"
                            [errorMsg]="isValidTitle"
                            (onChange)="edit($event)"
                        ></app-text-field>
                        <app-text-field
                            [id]="'yearBorn'"
                            [title]="'Year Born'"
                            [placeholder]="'Year Born'"
                            [errorMsg]="isValidYear"
                            (onChange)="edit($event)"
                        ></app-text-field>
                    </form>
                </app-modal>
            </div>
            <div *ngIf="deleteActorId !== null">
                <app-modal
                    [title]="'Delete?'"
                    [acceptLabel]="'Delete'"
                    [cancelLabel]="'Cancel'"
                    [error]="deleteStatus"
                    (onCancel)="focusOutDeleteDialog()"
                    (onAccept)="deleteActor()"
                >
                    Are you sure?
                </app-modal>
            </div>
        </app-container>
    `
})
export class ActorsPageComponent implements OnInit {

    // Contains the actors that have been already loaded from the server
    public actors: ActorInterface[];

    // Used to represent the status of the HTTP GET calls
    public isLoaded!: boolean;

    // Display error if loading fails
    public fetchErrorMsg: null | string;

    // Used to represent the status of the HTTP DELETE call
    public deleteStatus: null | string;

    // Used to represent the status of the HTTP POST and HTTP PUT calls
    public saveStatus: null | string;

    // Used to desplay the confirmation dialog before deleting a actor
    // null hides the modal and number displays the modal
    public deleteActorId: null | number;

    // Used to hold the values of the actor editor or null when nothing is being edited
    public editorValue: null | Partial<ActorInterface>;
    public isValidTitle!: null | string;
    public isValidYear!: null | string;

    public actorService!: interfaces.ActorService;

    public constructor(
        @Inject(ACTOR_SERVICE) actorService: interfaces.ActorService
    ) {
        this.actorService = actorService;
        this.actors = [];
        this.fetchErrorMsg = null;
        this.isLoaded = false;
        this.deleteStatus = null;
        this.saveStatus = null;
        this.deleteActorId = null;
        this.editorValue = null;
        this.isValidTitle = null;
        this.isValidYear = null;
    }

    public async ngOnInit() {
        this.isLoaded = false;
        try {
            this.actors = await this.actorService.getAll();
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
        this.deleteActorId = id;
    }

    public focusOutDeleteDialog() {
        this.deleteActorId = null;
    }

    public async saveActor() {
        if (isValidNewActor(this.editorValue)) {
            const newActor = await this.actorService.create(this.editorValue as any);
            this.actors.push(newActor);
            this.saveStatus = null;
            this.editorValue = null;
        } else {
            this.saveStatus = "Invalid actor!";
        }
    }

    public async deleteActor() {
        try {
            if (this.deleteActorId) {
                await this.actorService.delete(this.deleteActorId);
                this.actors = this.actors.filter((m) => m.id !== this.deleteActorId);
                this.deleteStatus = null;
                this.deleteActorId = null;
            }
        } catch (err) {
            this.deleteStatus = "Cannot delete actor!";
        }
    }

    public edit(keyVal: any) {
        const actor = {...(this.editorValue || {}), ...{[keyVal.k]: keyVal.v}};
        if (actor.name) {
            this.isValidTitle = (actor.name && actor.name.length) > 0 ? null : "Name cannot be empty!";
        }
        if (actor.yearBorn) {
            this.isValidYear = isNaN(actor.yearBorn) === false ? null : "Year born must be a number!";
        }
        this.editorValue = actor;
    }

}
