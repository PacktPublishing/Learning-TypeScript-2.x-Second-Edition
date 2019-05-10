import { Router } from "express";
import { getRepository } from "../repositories/movie_repository";

const movieRouter = Router();

movieRouter.get("/", function (req, res) {
    const movieRepository = getRepository();
    movieRepository.find().then((movies) => {
        res.json(movies);
    }).catch((e: Error) => {
        res.status(500);
        res.send(e.message);
    });
});

movieRouter.get("/:year", function (req, res) {
    const movieRepository = getRepository();
    movieRepository.find({
        year: req.params.year
    }).then((movies) => {
        res.json(movies);
    }).catch((e: Error) => {
        res.status(500);
        res.send(e.message);
    });
});

movieRouter.post("/", function (req, res) {
    const movieRepository = getRepository();
    const newMovie = req.body;
    if (
        typeof newMovie.title !== "string" ||
        typeof newMovie.year !== "number"
    ) {
        res.status(400);
        res.send(`Invalid Movie!`);
    }
    movieRepository.find(newMovie).then((movie) => {
        res.json(movie);
    }).catch((e: Error) => {
        res.status(500);
        res.send(e.message);
    });
});

export { movieRouter };
