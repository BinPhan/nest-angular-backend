import { MigrationInterface, QueryRunner } from "typeorm";

export class src1663316190326 implements MigrationInterface {
    name = 'src1663316190326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`username\` ON \`user\` (\`username\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`username\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\``);
    }

}
