module.exports = class CreateContacts1637014207574 {
  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "celular" character varying(13) NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"));`,
      undefined
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("contacts");
  }
};
