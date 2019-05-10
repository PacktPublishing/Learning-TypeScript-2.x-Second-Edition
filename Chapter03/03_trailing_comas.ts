namespace trailing_comas  {

    function greetWithoutTralingComans(
        name: string
    ): string {
        return `Hi! ${name}`;
    }

    function updatedGreetWithoutTralingComans(
        name: string
        surname: string, // Error
    ): string {
        return `Hi! ${name} ${surname}`;
    }

    function greetWithTralingComans(
        name: string,
    ): string {
        return `Hi! ${name}`;
    }

    function updatedGreetWithTralingComans(
        name: string,
        surname: string,
    ): string {
        return `Hi! ${name} ${surname}`;
    }

}
