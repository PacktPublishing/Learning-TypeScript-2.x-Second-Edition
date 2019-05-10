import chalk from "chalk";
import * as ts from "typescript";

/*
    This file demostrates how to use the TypeScript
    language services to access the AST
*/

// The TS compiler options
const options = {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES5,
};

// Build a program using the set of root file names in fileNames
const program = ts.createProgram(
    [
        "./app/interfaces.ts",
        "./app/ninja.ts",
        "./app/katana.ts",
        "./app/main.ts"
    ],
    options
);

// Get the checker, we will use it to find more about classes
const checker = program.getTypeChecker();

interface Result {
    fileName: string;
    classes: string[];
    interfaces: string[];
}

// Iterate through files to find classes and interfaces
const entities = program.getSourceFiles().map(file => {

    if (
        file.fileName.indexOf("lib.d.ts") !== -1 ||
        file.fileName.indexOf("node_modules") !== -1
    ) {
        return null;
    }

    const result = {
        fileName: file.fileName,
        classes: [] as string[],
        interfaces: [] as string[]
    };

    const visit = (node: ts.Node) => {
        if (node.kind === ts.SyntaxKind.ClassDeclaration) {
            // Find class identifier
            node.getChildren().forEach(n => {
                if (n.kind === ts.SyntaxKind.Identifier) {
                    const name = (n as ts.Identifier).getFullText();
                    result.classes.push(name);
                }
            });
        } else if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
            // Find interface identifier
            node.getChildren().forEach(n => {
                if (n.kind === ts.SyntaxKind.Identifier) {
                    const name = (n as ts.Identifier).getFullText();
                    result.interfaces.push(name);
                }
            });
        } else if (node.kind === ts.SyntaxKind.ModuleDeclaration) {
            // Iterate module nodes
            ts.forEachChild(node, visit);
        }
    };

    ts.forEachChild(file, visit);
    return result;

}).filter(e => e !== null) as Result[];

entities.forEach(e => {
    console.log(chalk.cyan(`
        FILE: ${e.fileName}\n
        CLASSES: ${e.classes.length > 0 ? e.classes : "N/A"}\n
        INTERFACES: ${e.interfaces.length > 0 ? e.interfaces : "N/A"}\n
    `));
});
