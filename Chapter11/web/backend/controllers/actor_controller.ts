import * as express from "express";
import { inject } from "inversify";
import {
    controller,
    httpGet,
    httpPost,
    requestBody,
    requestParam,
    response,
    httpDelete
} from "inversify-express-utils";
import { Repository } from "typeorm";
import { TYPE } from "../constants/types";
import { Actor } from "../entities/actor";

@controller("/api/v1/actors")
export class ActorController {

    private readonly _actorRepository: Repository<Actor>;

    public constructor(
        @inject(TYPE.ActorRepository) actorRepository: Repository<Actor>
    ) {
        this._actorRepository = actorRepository;
    }

    @httpGet("/")
    public async get(
        @response() res: express.Response
    ) {
        try {
            return await this._actorRepository.find();
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpPost("/")
    public async post(
        @response() res: express.Response,
        @requestBody() newActor: Actor
    ) {
        if (
            !(typeof newActor.name === "string") || isNaN(newActor.yearBorn)
        ) {
            res.status(400);
            res.send("Invalid Actor!");
        }
        try {
            return await this._actorRepository.save(newActor);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpDelete("/:id")
    public async delete(
        @requestParam("id") id: string,
        @response() res: express.Response
    ) {
        try {
            await this._actorRepository.deleteById(id);
            res.json({});
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

}
