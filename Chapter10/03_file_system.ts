// Run using ts-node 03_file_system.ts --files ./**/*.txt --find SOMETHING --replace SOMETHING_ELSE

import * as fs from "fs";
import * as yargs from "yargs";
import glob from "glob";
import { promisify } from "util";

const globAsync = promisify(glob);
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Read arguments from process.argv
function getCommandLineArguments() {

    const files = yargs.argv.files;

    if (!files) {
        throw new Error("Missing argument --files");
    }
    const find = yargs.argv.find;

    if (!find) {
        throw new Error("Missing argument --find");
    }

    const replace = yargs.argv.replace;

    if (!replace) {
        throw new Error("Missing argument --replace");
    }

    return {
        pattern: files,
        find: find,
        replace: replace
    };

};

// Checks that no arguments are missing
function validateCommandLineArguments(args: any) {
    if (args.pattern === undefined) {
        throw new Error(`Invalid pattern ${args.pattern}`);
    }
    if (args.find === undefined) {
        throw new Error(`Invalid find ${args.find}`);
    }
    if (args.replace === undefined) {
        throw new Error(`Invalid replace ${args.replace}`);
    }
}

// Find path of files that match glob pattern
async function findMatchingFilesAsync(pattern: string) {
    const files = await globAsync(pattern);
    // We need to let TypeScript that files is an array
    return files as string[];
}

// Finds a word in a file and replaces with another word
async function findAndReplaceAsync(
    file: string, find: string, replace: string
) {
    const buffer = await readFileAsync(file);
    const originalText = buffer.toString();
    // This is a quick way to replace a word in JavaScript
    const newText = originalText.split(find).join(replace);
    await writeFileAsync(file, newText, "utf8");
}

// Runs the entire process
async function runAsync() {

    // Read arguments
    const args = getCommandLineArguments();

    // Validate arguments
    validateCommandLineArguments(args);

    // Find matching files
    const files = await findMatchingFilesAsync(args.pattern);

    // Find and replace
    files.forEach(async (file) => {
        await findAndReplaceAsync(file, args.find, args.replace);
    });

}

// The application entry point
(async () => {
    await runAsync();
})();
