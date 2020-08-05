import Knex from 'knex'

export async function up(knex: Knex) {

}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes')
}