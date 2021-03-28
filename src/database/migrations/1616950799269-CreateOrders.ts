import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { orderTableName } from "../../modules/users/entities/Order";
import { idColumn, timestampColumns } from "./utils";

export class CreateOrders1616950799269 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: orderTableName,
        columns: [
          idColumn,
          {
            name: 'total',
            type: 'decimal'
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          ...timestampColumns,
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(orderTableName)
  }
}
