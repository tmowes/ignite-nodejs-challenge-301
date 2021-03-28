import { MigrationInterface, QueryRunner, Table } from "typeorm";

import { genreTableName } from "../../modules/games/entities/Genre";
import { idColumn, timestampColumns } from "./utils";

export class CreateGenre1616935988226 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: genreTableName,
        columns: [
          idColumn,
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          ...timestampColumns,
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(genreTableName)
  }

}
