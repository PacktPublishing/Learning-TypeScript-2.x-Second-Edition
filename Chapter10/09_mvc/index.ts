import "reflect-metadata";
import express from "express";
import * as bodyParser from "body-parser";
import { getDbConnection } from "./db";
import { movieRouter } from "./controllers/movie_controller";

(async () => {

    await getDbConnection();

    const port = 3000;
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/api/v1/movies", movieRouter);
    
    app.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`)
    });

})();
