import express from "express";

const port = 3000;
const app = express();

const timerMiddleware = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    console.log(`Time: ${Date.now()}`);
    next();
};

const loggerMiddleware = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    console.log(`URL: ${req.url}`);
    next();
};

// Application level middlware
app.use(timerMiddleware);

// Route level middleware
app.get("/", loggerMiddleware, (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
