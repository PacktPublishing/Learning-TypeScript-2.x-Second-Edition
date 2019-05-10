import { ActorInterface } from "../../universal/entities/actor";
import * as mobx from "mobx";
import { provide } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

const { observable, action, runInAction, configure } = mobx;
configure({ enforceActions: true });

@provide(TYPE.ActorStore)
export class ActorStore implements interfaces.ActorStore {

    // Contains the actors that have been already loaded from the server
    @observable public actors: ActorInterface[] = [];

    // Used to represent the status of the HTTP GET calls
    @observable public loadStatus: interfaces.Status = "pending";

    // Used to represent the status of the HTTP DELETE call
    @observable public deleteStatus: interfaces.Status = "idle";

    // Used to represent the status of the HTTP POST and HTTP PUT calls
    @observable public saveStatus: interfaces.Status = "idle";

    // Used to desplay the confirmation dialog before deleting a actor
    // null hides the modal and number displays the modal
    @observable public deleteActorId: null | number = null;

    // Used to hold the values of the actor editor or null when nothing is being edited
    @observable public editorValue: null | Partial<ActorInterface> = null;

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
            this.deleteActorId = id;
        });
    }

    @action
    public focusOutDeleteDialog() {
        runInAction(() => {
            this.deleteActorId = null;
        });
    }

    @action
    public async getAll() {
        try {
            const response = await fetch("/api/v1/actors/", { method: "GET" });
            const actors: ActorInterface[] = await response.json();
            // We use setTimeout to simulate a slow request
            // this should allow us to see the loading component
            setTimeout(
                () => {
                    runInAction(() => {
                        this.loadStatus = "done";
                        this.actors = actors;
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
    public edit<T extends ActorInterface, K extends keyof T>(key: K, val: T[K]) {
        runInAction(() => {
            const actor = {...(this.editorValue || {}), ...{[key]: val}};
            this.editorValue = actor;
        });
    }

    @action
    public async create(actor: Partial<ActorInterface>) {
        try {
            const response = await fetch(
                "/api/v1/actors/",
                {
                    body: JSON.stringify(actor),
                    headers: {
                        "Accept": "application/json, text/plain, */*",
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                }
            );
            const newActor: ActorInterface = await response.json();
            runInAction(() => {
                this.loadStatus = "done";
                this.actors.push(newActor);
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
            const response = await fetch(`/api/v1/actors/${id}`, { method: "DELETE" });
            await response.json();
            runInAction(() => {
                this.deleteStatus = "done";
                this.actors = this.actors.filter((m) => m.id !== id);
                this.deleteActorId = null;
            });
        } catch (error) {
            runInAction(() => {
                this.deleteStatus = "error";
            });
        }
    }

}
