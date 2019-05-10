import * as express from "express";
import { inject } from "inversify";
import {
    controller,
    httpGet,
    httpPost,
    requestParam,
    requestBody,
    response,
    httpDelete
} from "inversify-express-utils";
import { Repository } from "typeorm";
import { TYPE } from "../constants/types";
import { Movie } from "../entities/movie";

@controller("/api/v1/movies")
export class MovieController {

    private readonly _movieRepository: Repository<Movie>;

    public constructor(
        @inject(TYPE.MovieRepository)movieRepository: Repository<Movie>
    ) {
        this._movieRepository = movieRepository;
    }

    @httpGet("/")
    public async get(
        @response() res: express.Response
    ) {
        try {
            return await this._movieRepository.find();
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

    @httpPost("/")
    public async post(
        @response() res: express.Response,
        @requestBody() newMovie: Movie
    ) {
        if (
            !(typeof newMovie.title === "string") || isNaN(newMovie.year)
        ) {
            res.status(400);
            res.send("Invalid Movie!");
        }
        try {
            return await this._movieRepository.save(newMovie);
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
            await this._movieRepository.deleteById(id);
            res.json({});
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }
    }

}
