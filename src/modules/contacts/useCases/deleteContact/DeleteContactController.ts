import { AppError } from "../../../../errors/AppErrors";
import { Response, Request } from "express";
import { container } from "tsyringe";

import { DeleteContactUseCase } from "./DeleteContactUseCase";

class DeleteContactController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!id) {
      throw new AppError("Por favor, informe o id!");
    }

    const deleteContactUseCase = container.resolve(DeleteContactUseCase);

    const isDeleted = await deleteContactUseCase.execute({ id });

    return response.status(201).json(isDeleted);
  }
}

export { DeleteContactController };
