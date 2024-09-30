import knex, { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: "12345",
      database: "workout"
    },
    migrations: {
      directory: "./migrations"
    }
  }
};

export default config;
