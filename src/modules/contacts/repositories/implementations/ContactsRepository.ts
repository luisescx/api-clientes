import { DeleteResult, getRepository, Repository } from "typeorm";
import { Contact } from "../../entities/Contact";
import {
  IContactsRepository,
  ICreateCategoryDto,
} from "../IContactsRepository";

class ContactsRepository implements IContactsRepository {
  private repository: Repository<Contact>;

  constructor() {
    this.repository = getRepository(Contact);
  }

  async create({ nome, celular }: ICreateCategoryDto): Promise<void> {
    const contact = this.repository.create({
      nome,
      celular,
    });

    await this.repository.save(contact);
  }

  async list(): Promise<Contact[]> {
    return this.repository.find();
  }

  async findByName(nome: string): Promise<Contact> {
    const category = await this.repository.findOne({ nome });
    return category;
  }

  async findById(id: string): Promise<Contact> {
    const category = await this.repository.findOne({ id });
    return category;
  }

  async delete({ id }: ICreateCategoryDto): Promise<boolean> {
    const deleteResult = await this.repository.delete({ id });

    return !!deleteResult;
  }
}

export { ContactsRepository };
