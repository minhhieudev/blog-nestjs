import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFieldAvatarUserTable1712675549832 implements MigrationInterface {
    name = 'AddFieldAvatarUserTable1712675549832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatar\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatar\``);
    }

}
