import chalk from "chalk";
import Ast, { DiagnosticMessageChain } from "ts-simple-ast";

// Warning: This file is not mean to be executed. It is just a form of documentation

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

files.forEach(file => {

  const functionDeclaration = file.getFunction("someFunction");

  if (functionDeclaration) {

    // Is exported
    functionDeclaration.isExported();
    functionDeclaration.isNamedExport();
    functionDeclaration.isDefaultExport();

    // Has export keyword
    functionDeclaration.hasExportKeyword();
    functionDeclaration.hasDefaultKeyword();

    // Access export keywords
    functionDeclaration.getExportKeyword();
    functionDeclaration.getDefaultKeyword();

    // Set is export
    functionDeclaration.setIsDefaultExport(true); 
    functionDeclaration.setIsDefaultExport(false);

    // Set is exported
    functionDeclaration.setIsExported(true); 
    functionDeclaration.setIsExported(false);

  }

  // Get all imports
  const imports = file.getImportDeclarations();

  // Add import
  const importDeclaration = file.addImportDeclaration({
      defaultImport: "MyClass",
      moduleSpecifier: "./file"
  });

  // Remove import
  importDeclaration.remove();

  // Get default import
  const defaultImport = importDeclaration.getDefaultImport();

  // Get named imports
  const namedImports = importDeclaration.getNamedImports();

  // Add named import
  const namedImport = importDeclaration.addNamedImport({
      name: "MyClass",
      alias: "MyAliasName" // alias is optional
  });

  // Remove named import
  namedImport.remove();

});
