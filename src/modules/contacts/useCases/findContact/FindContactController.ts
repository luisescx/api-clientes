import { AppError } from "../../../../errors/AppErrors";
import { Response, Request } from "express";
import { container } from "tsyringe";

import { FindContactUseCase } from "./FindContactUseCase";

class FindContactController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!id) {
      throw new AppError("Por favor, informe o id!");
    }

    const findContactUseCase = container.resolve(FindContactUseCase);

    const contact = await findContactUseCase.execute({ id });

    if (!contact) {
      throw new AppError("Contato no encontrado");
    }

    return response.status(201).json(contact);
  }
}

export { FindContactController };
