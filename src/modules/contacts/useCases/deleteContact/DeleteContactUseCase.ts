import { AppError } from "../../../../errors/AppErrors";
import { inject, injectable } from "tsyringe";
import {
  IContactsRepository,
  ICreateCategoryDto,
} from "../../repositories/IContactsRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteContactUseCase {
  constructor(
    @inject("ContactsRepository")
    private contactsRepository: IContactsRepository
  ) {}

  async execute({ id }: IRequest): Promise<boolean> {
    const contact = await this.contactsRepository.findById(id);

    if (!contact) {
      throw new AppError("Contato não existe");
    }

    const isDeleted = await this.contactsRepository.delete({
      id,
    } as ICreateCategoryDto);

    return isDeleted;
  }
}

export { DeleteContactUseCase };
