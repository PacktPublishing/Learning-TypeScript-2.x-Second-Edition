import { createConnection } from "typeorm";
import { Actor } from "./entities/actor";
import { Movie } from "./entities/movie";

export async function getDbConnection() {

    const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
    const DATABASE_USER = process.env.DATABASE_USER || "";
    const DATABASE_PORT = 5432;
    const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
    const DATABASE_DB = "demo";

    const entities = [
        Actor,
        Movie
    ];

    const conn = await createConnection({
        database: DATABASE_DB,
        entities,
        host: DATABASE_HOST,
        password: DATABASE_PASSWORD,
        port: DATABASE_PORT,
        synchronize: true,
        type: "postgres",
        username: DATABASE_USER
    });

    return conn;

}
