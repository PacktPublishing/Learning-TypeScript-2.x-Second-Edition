import { readFile } from "fs";

readFile("./hello.txt", "utf-8", (err, buffer) => {
    console.log(buffer.toString());
});

function readJson(
    fileName: string,
    callback: (err: Error|null, json?: any) => void
) {
    readFile(fileName, "utf-8", (err, buffer) => {
        if (err) {
            callback(err);
        }
        try {
            const parsed = JSON.parse(buffer);
            callback(null, parsed);
        } catch (innerErr) {
            callback(err);
        }
    });
}
