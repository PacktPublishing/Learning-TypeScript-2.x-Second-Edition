import express from "express";

const moviesRouter = express.Router();

// URL "/api/v1/movies" + "/"
moviesRouter.get("/", (req, res) => {
    res.send("Hello from movies!");
});

const directorsRouter = express.Router();

// URL "/api/v1/directors" + "/"
directorsRouter.get("/", (req, res) => {
    res.send("Hello from directors!");
});

const port = 3000;
const app = express();

app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/directors", directorsRouter);

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
