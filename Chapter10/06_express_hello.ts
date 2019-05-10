import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, (error: Error) => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
