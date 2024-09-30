import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
        ALTER TABLE workout.users ADD password varchar(100) NOT NULL;
        `)

}


export async function down(knex: Knex): Promise<void> {
}

