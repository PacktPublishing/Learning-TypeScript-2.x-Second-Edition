import { readFile } from "fs";
import { promisify } from "util";

const readFileAsync = promisify(readFile);

(async () => {
    const buffer = await readFileAsync("./hello.txt", "utf-8");
    console.log(buffer.toString());
})();

async function readJson(fileName: string) {
    try {
        const buffer = await readFileAsync(fileName, "utf-8");
        const parsed = JSON.parse(buffer.toString());
        return parsed;
    } catch (err) {
        return err;
    }
}
