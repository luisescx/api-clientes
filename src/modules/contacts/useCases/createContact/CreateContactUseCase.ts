import { AppError } from "../../../../errors/AppErrors";
import { inject, injectable } from "tsyringe";
import { IContactsRepository } from "../../repositories/IContactsRepository";
import { validatePhoneNumber } from "../../../../util/AppUtil";

interface IRequest {
  nome: string;
  celular: string;
}

@injectable()
class CreateContactUseCase {
  constructor(
    @inject("ContactsRepository")
    private contactsRepository: IContactsRepository
  ) {}

  async execute({ nome, celular }: IRequest): Promise<void> {
    if (!nome) {
      throw new AppError("Nome é obrigatório");
    }

    if (!validatePhoneNumber(celular)) {
      throw new AppError("Celular Inválido");
    }

    const contactAlreadyExists = await this.contactsRepository.findByName(nome);

    if (contactAlreadyExists) {
      throw new AppError("Contato já cadastrado");
    }

    this.contactsRepository.create({ nome, celular });
  }
}

export { CreateContactUseCase };
