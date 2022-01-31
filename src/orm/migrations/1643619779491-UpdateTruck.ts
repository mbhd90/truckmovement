import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTruck1643619779491 implements MigrationInterface {
    name = 'UpdateTruck1643619779491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`file\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`owner\` varchar(255) NOT NULL, \`path\` varchar(255) NOT NULL, \`mime\` varchar(255) NOT NULL, \`size\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, INDEX \`name\` (\`name\`), INDEX \`owner\` (\`owner\`), INDEX \`path\` (\`path\`), INDEX \`mime\` (\`mime\`), INDEX \`size\` (\`size\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`truck_movement\` ADD \`time_out\` time NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_110bcaec8c83846639e4508e11\` ON \`activity\``);
        await queryRunner.query(`ALTER TABLE \`activity\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_270499fd7f2409e885a9e026d0\` ON \`area\``);
        await queryRunner.query(`DROP INDEX \`IDX_6855a2471289187619ffe13bec\` ON \`area\``);
        await queryRunner.query(`ALTER TABLE \`area\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_874ae06530aba34df6b2b2b8fc\` ON \`city\``);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_d941a6500d9b87e14b264be61d\` ON \`company_activity\``);
        await queryRunner.query(`ALTER TABLE \`company_activity\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_a14c58583179eeb73a133c81da\` ON \`company\``);
        await queryRunner.query(`DROP INDEX \`IDX_b02854e873fde825fd8e826b86\` ON \`company\``);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`phone2\` \`phone2\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`address1\` \`address1\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`address2\` \`address2\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`pobox\` \`pobox\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`website\` \`website\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`longitude\` \`longitude\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`latitude\` \`latitude\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`bank_code\` \`bank_code\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`bank_key\` \`bank_key\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`bank_doc\` \`bank_doc\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_7a783bff0af0e73f0303d3328c\` ON \`country\``);
        await queryRunner.query(`DROP INDEX \`IDX_e13d09e05bf6532c7610c89c6f\` ON \`country\``);
        await queryRunner.query(`ALTER TABLE \`country\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_71cd93fa7974269c51417f595e\` ON \`doctype\``);
        await queryRunner.query(`ALTER TABLE \`doctype\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_a583557c2ebd986ef1a7477a9e\` ON \`permission\``);
        await queryRunner.query(`ALTER TABLE \`permission\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`request_doc\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_c9fcfcdc7b277eeca635489be9\` ON \`role_permision\``);
        await queryRunner.query(`ALTER TABLE \`role_permision\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_8ccd425403dd7825de4d83d14f\` ON \`role\``);
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`date_in\` ON \`truck_movement\``);
        await queryRunner.query(`ALTER TABLE \`truck_movement\` DROP COLUMN \`date_in\``);
        await queryRunner.query(`ALTER TABLE \`truck_movement\` ADD \`date_in\` time NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`truck_movement\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_094936cc710c3c37426eb4d8c2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e0618ff0122038a7da20b0e69a\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`company_id\` \`company_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`address\` \`address\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_110bcaec8c83846639e4508e11\` ON \`activity\` (\`name\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_270499fd7f2409e885a9e026d0\` ON \`area\` (\`country_id\`, \`code\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_6855a2471289187619ffe13bec\` ON \`area\` (\`country_id\`, \`name\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_874ae06530aba34df6b2b2b8fc\` ON \`city\` (\`country_id\`, \`name\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_d941a6500d9b87e14b264be61d\` ON \`company_activity\` (\`company_id\`, \`activity_id\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a14c58583179eeb73a133c81da\` ON \`company\` (\`niu\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b02854e873fde825fd8e826b86\` ON \`company\` (\`email\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_7a783bff0af0e73f0303d3328c\` ON \`country\` (\`code\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e13d09e05bf6532c7610c89c6f\` ON \`country\` (\`name\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_71cd93fa7974269c51417f595e\` ON \`doctype\` (\`country_id\`, \`name\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a583557c2ebd986ef1a7477a9e\` ON \`permission\` (\`service\`, \`path\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_c9fcfcdc7b277eeca635489be9\` ON \`role_permision\` (\`role_id\`, \`permission_id\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_8ccd425403dd7825de4d83d14f\` ON \`role\` (\`name\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE INDEX \`date_in\` ON \`truck_movement\` (\`date_in\`)`);
        await queryRunner.query(`CREATE INDEX \`time_in\` ON \`truck_movement\` (\`date_in\`)`);
        await queryRunner.query(`CREATE INDEX \`time_out\` ON \`truck_movement\` (\`time_out\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_094936cc710c3c37426eb4d8c2\` ON \`user\` (\`email\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e0618ff0122038a7da20b0e69a\` ON \`user\` (\`login\`, \`deletedAt\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e0618ff0122038a7da20b0e69a\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_094936cc710c3c37426eb4d8c2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`time_out\` ON \`truck_movement\``);
        await queryRunner.query(`DROP INDEX \`time_in\` ON \`truck_movement\``);
        await queryRunner.query(`DROP INDEX \`date_in\` ON \`truck_movement\``);
        await queryRunner.query(`DROP INDEX \`IDX_8ccd425403dd7825de4d83d14f\` ON \`role\``);
        await queryRunner.query(`DROP INDEX \`IDX_c9fcfcdc7b277eeca635489be9\` ON \`role_permision\``);
        await queryRunner.query(`DROP INDEX \`IDX_a583557c2ebd986ef1a7477a9e\` ON \`permission\``);
        await queryRunner.query(`DROP INDEX \`IDX_71cd93fa7974269c51417f595e\` ON \`doctype\``);
        await queryRunner.query(`DROP INDEX \`IDX_e13d09e05bf6532c7610c89c6f\` ON \`country\``);
        await queryRunner.query(`DROP INDEX \`IDX_7a783bff0af0e73f0303d3328c\` ON \`country\``);
        await queryRunner.query(`DROP INDEX \`IDX_b02854e873fde825fd8e826b86\` ON \`company\``);
        await queryRunner.query(`DROP INDEX \`IDX_a14c58583179eeb73a133c81da\` ON \`company\``);
        await queryRunner.query(`DROP INDEX \`IDX_d941a6500d9b87e14b264be61d\` ON \`company_activity\``);
        await queryRunner.query(`DROP INDEX \`IDX_874ae06530aba34df6b2b2b8fc\` ON \`city\``);
        await queryRunner.query(`DROP INDEX \`IDX_6855a2471289187619ffe13bec\` ON \`area\``);
        await queryRunner.query(`DROP INDEX \`IDX_270499fd7f2409e885a9e026d0\` ON \`area\``);
        await queryRunner.query(`DROP INDEX \`IDX_110bcaec8c83846639e4508e11\` ON \`activity\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`address\` \`address\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`company_id\` \`company_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e0618ff0122038a7da20b0e69a\` ON \`user\` (\`login\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_094936cc710c3c37426eb4d8c2\` ON \`user\` (\`email\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`truck_movement\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`truck_movement\` DROP COLUMN \`date_in\``);
        await queryRunner.query(`ALTER TABLE \`truck_movement\` ADD \`date_in\` datetime NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`date_in\` ON \`truck_movement\` (\`date_in\`)`);
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_8ccd425403dd7825de4d83d14f\` ON \`role\` (\`name\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`role_permision\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_c9fcfcdc7b277eeca635489be9\` ON \`role_permision\` (\`role_id\`, \`permission_id\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`request_doc\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`permission\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a583557c2ebd986ef1a7477a9e\` ON \`permission\` (\`service\`, \`path\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`doctype\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_71cd93fa7974269c51417f595e\` ON \`doctype\` (\`country_id\`, \`name\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`country\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e13d09e05bf6532c7610c89c6f\` ON \`country\` (\`name\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_7a783bff0af0e73f0303d3328c\` ON \`country\` (\`code\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`bank_doc\` \`bank_doc\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`bank_key\` \`bank_key\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`bank_code\` \`bank_code\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`latitude\` \`latitude\` double(22) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`longitude\` \`longitude\` double(22) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`website\` \`website\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`pobox\` \`pobox\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`address2\` \`address2\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`address1\` \`address1\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`phone2\` \`phone2\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b02854e873fde825fd8e826b86\` ON \`company\` (\`email\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a14c58583179eeb73a133c81da\` ON \`company\` (\`niu\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`company_activity\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_d941a6500d9b87e14b264be61d\` ON \`company_activity\` (\`company_id\`, \`activity_id\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_874ae06530aba34df6b2b2b8fc\` ON \`city\` (\`country_id\`, \`name\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`area\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_6855a2471289187619ffe13bec\` ON \`area\` (\`country_id\`, \`name\`, \`deletedAt\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_270499fd7f2409e885a9e026d0\` ON \`area\` (\`country_id\`, \`code\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`activity\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_110bcaec8c83846639e4508e11\` ON \`activity\` (\`name\`, \`deletedAt\`)`);
        await queryRunner.query(`ALTER TABLE \`truck_movement\` DROP COLUMN \`time_out\``);
        await queryRunner.query(`DROP INDEX \`size\` ON \`file\``);
        await queryRunner.query(`DROP INDEX \`mime\` ON \`file\``);
        await queryRunner.query(`DROP INDEX \`path\` ON \`file\``);
        await queryRunner.query(`DROP INDEX \`owner\` ON \`file\``);
        await queryRunner.query(`DROP INDEX \`name\` ON \`file\``);
        await queryRunner.query(`DROP TABLE \`file\``);
    }

}
