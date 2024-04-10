import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailToUserTable1711467003378 implements MigrationInterface {
    name = 'AddEmailToUserTable1711467003378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
