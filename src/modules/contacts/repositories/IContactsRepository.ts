import { Contact } from "../entities/Contact";

interface ICreateCategoryDto {
  id?: string;
  nome: string;
  celular: string;
}

interface IContactsRepository {
  findByName(nome: string): Promise<Contact>;
  findById(string: string): Promise<Contact>;
  list(): Promise<Contact[]>;
  create({ nome, celular }: ICreateCategoryDto): Promise<void>;
  delete({ nome, celular }: ICreateCategoryDto): Promise<boolean>;
}

export { IContactsRepository, ICreateCategoryDto };
