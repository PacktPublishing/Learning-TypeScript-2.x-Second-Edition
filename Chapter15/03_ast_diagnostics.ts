import chalk from "chalk";
import Ast, { DiagnosticMessageChain } from "ts-simple-ast";

/*
    This file demostrates how to use ts-simple-ast
    to find errors in TypeScript files
*/

function getAst(tsConfigPath: string, sourceFilesPath: string) {
  const ast = new Ast({
    tsConfigFilePath: tsConfigPath,
    addFilesFromTsConfig: false
  });
  ast.addExistingSourceFiles(sourceFilesPath);
  return ast;
}

function getErrors(ast: Ast) {

  const diagnostics = ast.getDiagnostics();

  function dmcToString(dmc: DiagnosticMessageChain, msg: string = ""): string {
    const messageText = dmc.getMessageText();
    const code = dmc.getCode();
    msg += `${code} ${messageText}\n`;
    const next = dmc.getNext();
    return next ? dmcToString(next, msg) : msg;
  }

  const errors = diagnostics.map(diagnostic => {
    const code = diagnostic.getCode();
    const sourceOrUndefined = diagnostic.getSourceFile();
    const source = sourceOrUndefined ? sourceOrUndefined.getFilePath() : "";
    const line = sourceOrUndefined
      ? sourceOrUndefined.getLineNumberFromPos(diagnostic.getStart() || 0)
      : "";
    const stringOrDMC = diagnostic.getMessageText();
    const messageText =
      typeof stringOrDMC === "string" ? stringOrDMC : dmcToString(stringOrDMC);
    return `
            ERROR CODE: ${code}
            DESCRIPTION: ${messageText}
            FILE: ${source}
            LINE: ${line}
        `;
  });

  return errors;
}

const myAst = getAst("./tsconfig.json", "./app/broken.ts");

getErrors(myAst).forEach(err => console.log(chalk.red(err)));
