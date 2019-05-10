import { AsyncContainerModule } from "inversify";
import { Repository } from "typeorm";
import { TYPE } from "./constants/types";
import { getDbConnection } from "./db";
import { Actor } from "./entities/actor";
import { Movie } from "./entities/movie";
import { getActorRepository } from "./repositories/actor_repository";
import { getMovieRepository } from "./repositories/movie_repository";

export const bindings = new AsyncContainerModule(async (bind) => {

    await getDbConnection();
    await require("./controllers/movie_controller");
    await require("./controllers/actor_controller");

    bind<Repository<Movie>>(TYPE.MovieRepository)
        .toDynamicValue(getMovieRepository)
        .inRequestScope();

    bind<Repository<Actor>>(TYPE.ActorRepository)
        .toDynamicValue(getActorRepository)
        .inRequestScope();

});
