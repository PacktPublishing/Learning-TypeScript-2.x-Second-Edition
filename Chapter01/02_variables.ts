namespace type_inference_variables_demo {

    let testVar1;                 // variable is declared but not initialized
    console.log(testVar1);        // shows undefined
    console.log(typeof testVar1); // shows undefined

    let testVar2 = null;          // variable is declared and null is assigned as value
    console.log(testVar2);        // shows null
    console.log(typeof testVar2); // shows object

}
