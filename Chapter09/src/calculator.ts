import { add } from "./operations/add";
import { pow } from "./operations/pow";

interface Operation {
    name: string;
    operation(a: number, b: number): number;
}

export class Calculator {
    private readonly _operations: Operation[];
    public constructor() {
        this._operations = [
            { name: "add", operation: add },
            { name: "pow", operation: pow }
        ];
    }
    public calculate(operation: string, a: number, b: number) {
        const opt = this._operations.filter((o) => o.name === operation)[0];
        if (opt === undefined) {
            throw new Error(`The operation ${operation} is not available!`);
        } else {
            return opt.operation(a, b);
        }
    }
}
