import * as express from "express";
import * as path from "path";
import { MathDemo } from "./math_demo";

export function getApp() {

    const app = express();
    const nullableAppRootPath = process.env.PWD || process.cwd();

    if (!nullableAppRootPath) {
        throw new Error("Please run the app via npm scripts");
    }

    const appRootPath = nullableAppRootPath;

    // Route for static assests (css and js file)
    // the path is ../../../ because it is executed
    // from the /dist/backend folder
    // /Users/remojansen/CODE/LearningTypeScript/chapters/chapter_11/02_frontend_testing
    console.log(nullableAppRootPath); // tslint:disable-line
    app.use("/public", express.static(path.join(appRootPath, "public")));

    // Route for index.html the path
    // is ../../../ because it is executed
    // from the /dist/backend folder
    app.get("/", (req, res) => res.sendFile(path.join(appRootPath, "index.html")));

    // Route for math pow operation
    app.get("/api/math/pow/:base/:exponent", (req, res) => {
        const mathDemo = new MathDemo();
        const base = parseInt(req.params.base, 10);
        const exponent = parseInt(req.params.exponent, 10);
        const result = mathDemo.pow(base, exponent);
        res.json({ result });
    });

    return app;

}
