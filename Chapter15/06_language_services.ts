import chalk from "chalk";
import { flatten, join } from "lodash";
import Ast, { DiagnosticMessageChain } from "ts-simple-ast";
import * as ts from "typescript";

function getAst(tsConfigPath: string, sourceFilesPath: string) {
    const ast = new Ast({
      tsConfigFilePath: tsConfigPath,
      addFilesFromTsConfig: false
    });
    ast.addExistingSourceFiles(sourceFilesPath);
    return ast;
}

const myAst = getAst("./tsconfig.json", "./app/*.ts");
const languageService = myAst.getLanguageService();
const files = myAst.getSourceFiles();
const interfaceDeclarations = flatten(files.map(f => f.getInterfaces()));

const result = interfaceDeclarations.map(interfaceDeclaration => {

    const interfaceName = interfaceDeclaration.getName();

    const implementations = languageService.getImplementations(
        interfaceDeclaration.getNameNode()
    );

    const implementationNames = implementations.map(implementation => {
        const children = implementation.getNode().getChildren();
        const identifier = children.filter(
            child => child.getKind() === ts.SyntaxKind.Identifier
        )[0];
        const implementationName = identifier.getText();
        return implementationName;
    });

    return {
        interface: interfaceName,
        implementations: implementationNames
    };

});

console.log(
    result.forEach(
        o => console.log(
            `- ${o.interface} is implemented by ${join(o.implementations, ",")}`
        )
    )
);

// - Weapon is implemented by Katana
// - Named is implemented by Katana
