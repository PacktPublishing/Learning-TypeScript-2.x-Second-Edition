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

    // Find all classes
    const classes = file.getClasses();

    // Find class by name
    const class1 = file.getClass("Katana");

    // Find class with no constructors
    const firstClassWithConstructor = file.getClass(
        c => c.getConstructors().length > 0
    );

    // Add a class
    const classDeclaration = file.addClass({
        name: "ClassName"
    });

    // Get extends
    const extendsExpression = classDeclaration.getExtends();

    // Set extends
    classDeclaration.setExtends("BaseClass");

    // Remove extends
    classDeclaration.removeExtends();

    // Get derived classes
    const derivedClasses = classDeclaration.getDerivedClasses();

    // Remove one class
    if (classDeclaration) {
        classDeclaration.remove();
    }

    // Get instance methods
    const instanceMethods = classDeclaration.getInstanceMethods();

    // Get statuc methods
    const staticMethods = classDeclaration.getStaticMethods();

    // Add method
    const method = classDeclaration.addMethod(
        { isStatic: true, name: "myMethod", returnType: "string" }
    );

    // Remove method
    method.remove();

    // Get instance properties
    const instanceProperties = classDeclaration.getInstanceProperties();

    // Get static properties
    const staticProperties = classDeclaration.getStaticProperties();

    // Add a property
    const property = classDeclaration.addProperty({ isStatic: true, name: "prop", type: "string" });

    // Remove property
    property.remove();

});
