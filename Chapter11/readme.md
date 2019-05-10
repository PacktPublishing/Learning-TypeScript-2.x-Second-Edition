# How can I run this example?

## Unix

Set the following environment variables:

```sh
export DATABASE_USER=postgres  \
export DATABASE_PASSWORD=secret  \
export DATABASE_HOST=localhost  \
export DATABASE_PORT=5432  \
export DATABASE_DB=demo
```

Download the Docker Postgres image:

```
docker pull postgres:9.5
```

Run a Docker container:

```sh
docker run --name POSTGRES_USER -p "$DATABASE_PORT":"$DATABASE_PORT"  \
-e POSTGRES_PASSWORD="$DATABASE_PASSWORD"  \
-e POSTGRES_USER="$DATABASE_USER"  \
-e POSTGRES_DB="$DATABASE_DB" \
-d postgres:9.5
```

## Windows

Set the following environment variables. These commands have been tested in the windows powershell.

```sh
$env:DATABASE_USER='postgres';
$env:DATABASE_PASSWORD='secret';
$env:DATABASE_HOST='localhost';
$env:DATABASE_PORT=5432;
$env:DATABASE_DB='demo';
```

Download the Docker Postgres image:

```
docker pull postgres:9.5
```


Run a Docker container:

```sh
docker run --name POSTGRES_USER -p 5432:5432 -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=postgres -e POSTGRES_DB=demo -d postgres:9.5
```

# Build and Run

```sh
npm run build
npm run start
```

# Common issues

If you run webpack via the `npm run build` command you might enconter the following issue:

```sh
ERROR in [at-loader] ./node_modules/@types/node/index.d.ts:5939:5
    TS2300: Duplicate identifier 'mod'.

ERROR in [at-loader] ..\..\node_modules\@types\requirejs\index.d.ts:38:11
    TS2300: Duplicate identifier 'mod'.

ERROR in [at-loader] ..\..\node_modules\@types\requirejs\index.d.ts:422:13
    TS2403: Subsequent variable declarations must have the same type.  Variable 'require' must be of type 'NodeRequire', but here has type 'Require'.
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js!node_modules/resolve-url-loader/index.js!node_modules/sass-loader/lib/loader.js!node_modules/bootstrap/scss/bootstrap.scss:
       2 modules
npm ERR! code ELIFECYCLE
```

To solve this issue you must delete the all the `node_module` folders in the companion source code. Then navigate to the folder that contains the `package.json` for this chapter: `/chapters/chapter_11` and run npm install. At this point, there should be only one `node_modules` folder in the entire companion source code (under the `/chapters/chapter_11` directory). The `npm run build` command should not throw the `TS2300: Duplicate identifier 'mod'.` error anymore.
