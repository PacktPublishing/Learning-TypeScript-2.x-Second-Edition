import chalk from "chalk";
import Ast, { DiagnosticMessageChain } from "ts-simple-ast";

/*
    This file demostrates how to use ts-simple-ast
    to navigate the TypeScript AST and find the name
    of classes
*/

function getAst(tsConfigPath: string, sourceFilesPath: string) {
  const ast = new Ast({
    tsConfigFilePath: tsConfigPath,
    addFilesFromTsConfig: false
  });
  ast.addExistingSourceFiles(sourceFilesPath);
  return ast;
}

const myAst = getAst("./tsconfig.json", "./app/*.ts");
const files = myAst.getSourceFiles();

const entities = files.map(f => {
  return {
    fileName: f.getFilePath(),
    classes: f.getClasses().map(c => c.getName()),
    interfaces: f.getInterfaces().map(i => i.getName())
  };
});

entities.forEach(e => {
  console.log(
    chalk.cyan(`
        FILE: ${e.fileName}\n
        CLASSES: ${e.classes.length > 0 ? e.classes : "N/A"}\n
        INTERFACES: ${e.interfaces.length > 0 ? e.interfaces : "N/A"}\n
    `)
  );
});
