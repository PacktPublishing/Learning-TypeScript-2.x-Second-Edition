import { Injectable } from "@angular/core";
import { ActorInterface } from "../../universal/entities/actor";
import * as interfaces from "../interfaces";

@Injectable()
export class ActorService implements interfaces.ActorService {

    public async getAll() {
        return new Promise<ActorInterface[]>(async (res, rej) => {
            try {
                const response = await fetch("/api/v1/actors/", { method: "GET" });
                const acts: ActorInterface[] = await response.json();
                // We use setTimeout to simulate a slow request
                // this should allow us to see the loading component
                setTimeout(
                    () => {
                        res(acts);
                    },
                    1500
                );
            } catch (error) {
                rej(error);
            }
        });
    }

    public async create(actor: Partial<ActorInterface>) {
        const response = await fetch(
            "/api/v1/actors/",
            {
                body: JSON.stringify(actor),
                headers: {
                    "Accept": "application/json, text/plain, *//*", // REMO // for /
                    "Content-Type": "application/json"
                },
                method: "POST"
            }
        );
        const newActor: ActorInterface = await response.json();
        return newActor;
    }

    public async delete(id: number) {
        const response = await fetch(`/api/v1/actors/${id}`, { method: "DELETE" });
        await response.json();
    }

}
