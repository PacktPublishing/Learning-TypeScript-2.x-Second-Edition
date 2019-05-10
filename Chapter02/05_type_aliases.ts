// Don't forget to disable strictNullChecks or strict in tsconfig.json
namespace type_aliases_demo {
    type PrimitiveArray = Array<string|number|boolean>;
    type MyNumber = number;
    type Callback = () => void;
}
