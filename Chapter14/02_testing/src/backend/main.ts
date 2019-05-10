import { getApp } from "./server";

const app = getApp();
const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`); // tslint:disable-line
});
