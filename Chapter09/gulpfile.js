let gulp = require("gulp");

gulp.task("hello", function() {
    console.log("Hello Gulp!");
});

let tslint = require("tslint");
let gulpTslint = require("gulp-tslint");

gulp.task("lint", function() {

    let program = tslint.Linter.createProgram("./tsconfig.json");
    
    return gulp.src([
        "src/**/**.ts",
        "test/**/**.test.ts"
    ])
    .pipe(gulpTslint({
        formatter: "stylish",
        program
    }))
    .pipe(gulpTslint.report());

});

gulp.task("default", ["hello", "lint"]);
