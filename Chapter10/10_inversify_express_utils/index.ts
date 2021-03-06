import "reflect-metadata";
import { Container } from "inversify";
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import { bindings } from "./inversify.config";

(async () => {

    const port = 3000;
    const container = new Container();
    await container.loadAsync(bindings);
    const app = new InversifyExpressServer(container);
    app.setConfig((a) => {
        a.use(bodyParser.json());
        a.use(bodyParser.urlencoded({ extended: true }));
    });
    const server = app.build();
    
    server.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`)
    });

})();
