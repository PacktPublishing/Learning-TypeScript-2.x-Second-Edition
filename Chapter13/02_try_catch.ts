try {
    // code that we want to work
    throw new Error("Oops!");
} catch (e) {
    // code executed if expected to work fails
    console.log(e);
} finally {
    // code executed always after try or try and catch (when errors)
    console.log("Finally!");
}
