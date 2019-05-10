/*

export DATABASE_USER=postgres \
export DATABASE_PASSWORD=secret \
export DATABASE_HOST=localhost \
export DATABASE_PORT=5432 \
export DATABASE_DB=demo

docker pull postgres:9.5

docker run --name POSTGRES_USER -p "$DATABASE_PORT":"$DATABASE_PORT"  \
-e POSTGRES_PASSWORD="$DATABASE_PASSWORD"  \
-e POSTGRES_USER="$DATABASE_USER"  \
-e POSTGRES_DB="$DATABASE_DB" \
-d postgres

*/
import "reflect-metadata";

import {
    Entity,
    getConnection,
    createConnection,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity()
class Movie {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public title!: string;
    @Column()
    public year!: number;
}

const entities = [
    Movie
];

const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
const DATABASE_USER = process.env.DATABASE_USER || "";
const DATABASE_PORT = 5432;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
const DATABASE_DB = "demo";

(async () => {
    
    const conn = await createConnection({
        type: "postgres",
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        username: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE_DB,
        entities: entities,
        synchronize: true
    });
    
    const getRepository = (entity: Function) => conn.getRepository(entity);
    const movieRepository = conn.getRepository(Movie);

    // INSERT INTO movies VALUES ('Star Wars: Episode IV – A New Hope', 1977)
    await movieRepository.save({
        title: "Star Wars: Episode IV – A New Hope",
        year: 1977
    });

    // SELECT * FROM movies WHERE year=1977
    const aMovieFrom1977 = await movieRepository.findOne({
        year: 1977
    });

    if (aMovieFrom1977) {
        console.log(aMovieFrom1977.title);
    }

})();
