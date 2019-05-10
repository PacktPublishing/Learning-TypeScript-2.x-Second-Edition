import "reflect-metadata";
import * as express from "express";
import { Container } from "inversify";
import * as bodyParser from "body-parser";
import * as path from "path";
import { InversifyExpressServer } from "inversify-express-utils";
import { bindings } from "./inversify.config";

(async () => {

    try {

        const port = 3000;
        const container = new Container();
        await container.loadAsync(bindings);
        const app = new InversifyExpressServer(container);

        // Declare routes of static files
        app.setConfig((a) => {
            a.use(bodyParser.json());
            a.use(bodyParser.urlencoded({ extended: true }));
            const appPath = path.join(__dirname, "../../public");
            a.use("/", express.static(appPath));
        });

        const server = app.build();

        server.listen(port, () => {
            console.log(`Server running at http://127.0.0.1:${port}/`); // tslint:disable-line
        });

    } catch (e) {
        console.log(e); // tslint:disable-line
    }

})();
