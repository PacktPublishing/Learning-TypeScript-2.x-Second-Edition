namespace control_flow_analysis_demo {

    function increment(
        incrementBy: number, valueOrValues: number | number[]
    ) {
        if (Array.isArray(valueOrValues)) {
            // values must be an array of number
            return valueOrValues.map((value) => value + incrementBy);
        } else {
            // values is a number
            return valueOrValues + incrementBy;
        }
    }

    increment(2, 2); // 4
    increment(2, [2, 4, 6]); // [4, 6, 8]

}
