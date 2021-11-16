import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("contacts")
class Contact {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  celular: string;
}

export { Contact };
