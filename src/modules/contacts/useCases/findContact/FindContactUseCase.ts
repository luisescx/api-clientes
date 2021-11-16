import { AppError } from "../../../../errors/AppErrors";
import { inject, injectable } from "tsyringe";
import { IContactsRepository } from "../../repositories/IContactsRepository";
import { Contact } from "../../../../modules/contacts/entities/Contact";

interface IRequest {
  id: string;
}

@injectable()
class FindContactUseCase {
  constructor(
    @inject("ContactsRepository")
    private contactsRepository: IContactsRepository
  ) {}

  async execute({ id }: IRequest): Promise<Contact> {
    const contact = await this.contactsRepository.findById(id);

    if (!contact) {
      throw new AppError("Contato não existe");
    }

    return contact;
  }
}

export { FindContactUseCase };
